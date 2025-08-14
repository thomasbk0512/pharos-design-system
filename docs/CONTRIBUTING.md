# Contributing to PHAROS

## PR checklist
- [ ] Uses semantic tokens only; no raw hex; spacing ∈ {4,8,12,16,24,32}
- [ ] Only `shadow-pharos` or `shadow-pharos-sm`; single borders
- [ ] Focus ring visible on all interactive elements
- [ ] Docs specimen is static (no popovers) and includes state grid when relevant
- [ ] `npm run tokens:build` and `npm run lint:tokens` pass locally
- [ ] Visual snapshots updated (`npm run test:update`) and reviewed
- [ ] CHANGELOG entry added

## Breaking changes
Open a Major PR and include a migration note in docs. Keep deprecated APIs for ≥1 minor release.

## Development workflow
1. **Local validation**: Run `npm run lint:tokens` before committing
2. **Token building**: Ensure `npm run tokens:build` completes successfully
3. **Visual testing**: Update snapshots with `npm run test:update` when UI changes
4. **Documentation**: Update relevant docs sections and add CHANGELOG entries

## Quality standards
- **Token compliance**: All colors, spacing, and shadows must use semantic tokens
- **Accessibility**: Focus rings visible, proper contrast ratios, keyboard navigation
- **Responsive design**: Components work across breakpoints with proper mobile behavior
- **Performance**: Minimal bundle impact, efficient rendering patterns
- **Testing**: Visual regression tests pass, component behavior verified


