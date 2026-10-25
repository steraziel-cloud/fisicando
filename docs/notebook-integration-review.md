# Notebook integration review — 2026-10-25

## Scope and current entrypoints

| Context | Engine and behavior |
| --- | --- |
| Standalone fraction lab | Math notebook, live entry, free comparison of two selected rational numbers. |
| Rational lesson, invariant-property practice | Same notebook and tools; the text asks the learner to practise simplification. No feature-limited duplicate implementation. |
| Rational lesson, two comparison activities | Same live entry and factor tools; separate sessions, supplied starting pairs, and equivalence validation against those pairs. |
| Optional quiz notebooks | Same tools, separate session per question; notebook work never selects an answer or completes a checkpoint. |
| Contextual MCD/mcm dialogs | Shared prime-factor notebook and floating keyboard; supplied numbers and explicit result return. |
| Standalone MCD/mcm lab | Same prime-factor notebook and floating keyboard. |
| Arithmetic lessons on factorization/MCD/mcm | Their existing lesson content is textual; the catalog labs and contextual tools above are the interactive entrypoints audited here. |

The reader, fraction lab and factor lab now load the same floating dock implementation.
The old dock asset remains as a compatibility asset, but is not loaded by these current entrypoints.
Compact notebook dimensions live in `assets/notebook-workspace.css`; page-specific layout remains in `fraction-lab.css`.
The legacy fraction-copilot adapter forwards to the current math notebook when available.

## Conflicts found and corrected

- Reader loaded the older dock and mounted the math notebook without live entry.
- The floating comparison/clipboard controls relied on a model binding that only the standalone bootstrap supplied. The notebook now owns its binding before the first render.
- Only the arithmetic model survived card changes: drafts, selections, typed fields, factor notes, the common-denominator pair/index and the dock state could be lost. A session now preserves those working states in memory.
- A document-level outside-pointer handler could dismiss a prepared operation when clicking reader navigation. It now preserves active forms and excludes reader navigation and the optional-notebook summary.
- Insert/edit and other competing transformations could start during an unfinished division/multiplication. They are guarded, and Insert is disabled while the arithmetic model has a pending transformation.
- Full-expression clipboard mutations are not applied to a partially transformed fraction.
- A parent floating keyboard could compete with the modal factor keyboard. The math dock is hidden while a contextual factor dialog is open.
- The centered dock could cover reader navigation. Reader defaults to a right-aligned dock, remains draggable, and reserves scrolling room; standalone factor pages also reserve room.
- Instructions for the comparison board described the older denominator-token flow. They now describe selecting the two fractions and completing the shared common-denominator workflow.
- The reader's fast card update now refreshes the reference-view heading when switching to free navigation.

## Automated verification

Passed:
- `node tests/factor-notebook.cjs`
- `node tests/notebook-factor-tools.cjs`
- `node tests/fraction-copilot.cjs` — 6,480 fraction cases.
- `node tests/rationals.cjs` — 5 lessons, 44 cards, 74 steps, 36 questions, 5,040 arithmetic cases.
- `node tests/notebook-integration.cjs` — real notebook mount/event/dispose logic with a minimal DOM boundary: typed divisor, outside-pointer during an operation, partial simplification, common-denominator handoff between fractions, remount, isolated sessions, nonduplicated starting fractions, dock state, and rejection of a concurrent insertion.

## Browser verification

On the published desktop reader:
- Entered 18/24, divided by 6, left the card after writing the denominator answer, returned and completed 3/4 with the typed value retained.
- Used the mcm dialog from the comparison board: 6 = 2·3, 4 = 2², chosen exponents, result 12, and explicit return to the fraction notebook.
- Rewrote 11/6 and 9/4 as 22/12 and 27/12, switched between the two comparison cards during the workflow, and obtained the correct comparison feedback.
- The second comparison activity retained its own supplied fractions.
- Opened the optional notebook on quiz question 3, wrote 7, closed/reopened it and retained 7; quiz answers remained unset and the question remained unverified.
- Embedded paper measured 962×320 CSS px and dock 448×177 CSS px in the inspected viewport, without horizontal page overflow.

## Practical limits

Sessions remain in-memory for the current visit; reloading starts a fresh lesson as before.
This review covers the rational/prime-factor notebook family, not every unrelated science or physics widget.
Real touch devices, very narrow windows and student usability still need hands-on feedback.
