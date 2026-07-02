---
'@astryxdesign/core': patch
---

[feat] Stack/HStack/VStack: add `padding`, `paddingX`, `paddingY` (spacing-scale inner padding) and `isScrollable` (`overflow: auto`) props; StackItem also gains `isScrollable`. These match the existing `padding`/`isScrollable` props on `Card`, `LayoutContent`, and `LayoutPanel`, so common frame layouts no longer need inline `style={{}}` for padding or the flex scroll-region pattern.
@cixzhang
