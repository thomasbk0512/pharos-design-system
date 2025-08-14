'use client'
import * as React from 'react'
import { DocsPage } from '../../../components/docs/DocsPage'
import { DocsSection } from '../../../components/docs/DocsSection'
import { SpecimenCard } from '../../../components/docs/SpecimenCard'
import { PharosCard } from '../../../components/pharos/Card'
import { PharosButton } from '../../../components/pharos/Button'
import { LabeledInput } from '../../../components/pharos/LabeledInput'
import { GridOverlay } from '../../../components/docs/GridOverlay'
// New imports
import { PharosCheckbox } from '../../../components/pharos/Checkbox'
import { PharosRadioGroup } from '../../../components/pharos/Radio'
import { PharosSwitch } from '../../../components/pharos/Switch'
import { PharosTabs } from '../../../components/pharos/Tabs'
import { Tag } from '../../../components/pharos/Tag'
import { PharosTable } from '../../../components/pharos/Table'
import { Pagination } from '../../../components/pharos/Pagination'
import { ToastCard } from '../../../components/pharos/ToastCard'
import { ModalSpecimen } from '../../../components/pharos/ModalSpecimen'
import { DrawerSpecimen } from '../../../components/pharos/DrawerSpecimen'
import { TooltipSpecimen } from '../../../components/pharos/TooltipSpecimen'
import { EmptyState } from '../../../components/pharos/EmptyState'
import { StateGrid, StateRow } from '../../../components/docs/StateGrid'
import { DocsToc } from '../../../components/docs/DocsToc'
// Pattern imports
import { FormPattern } from '../../../components/patterns/FormPattern'
import { ConfirmDialogSpec } from '../../../components/patterns/ConfirmDialogSpec'
import { PageHeader } from '../../../components/patterns/PageHeader'
import { ToolbarFilters } from '../../../components/patterns/ToolbarFilters'
import { CardVariants } from '../../../components/patterns/CardVariants'
import { DocsSearch } from '../../../components/docs/DocsSearch'
import { PharosIcon } from '../../../components/pharos/Icon'
import { Check, AlertTriangle, Info } from '@/components/pharos/icons'
import { SelectSpecimen } from '../../../components/patterns/SelectSpecimen'
import { DateInputGuidelines } from '../../../components/patterns/DateInputGuidelines'
import { SkeletonSpecimen } from '../../../components/patterns/SkeletonSpecimen'
import { InlineValidationSpecimen } from '../../../components/patterns/InlineValidationSpecimen'
import { AppShell } from '../../../components/patterns/AppShell'
import { PositionSetupSpecimen } from '../../../components/patterns/PositionSetupSpecimen'

export default function Page() {
  // Document sections for search and navigation
  const DOC_SECTIONS = [
    { id: 'foundations-layout',   label: 'Layout & Breakpoints' },
    { id: 'foundations-motion',   label: 'Motion' },
    { id: 'foundations-density',  label: 'Density' },
    { id: 'foundations-zindex',   label: 'Z-Index' },
    { id: 'foundations-dataviz',  label: 'Data-Viz' },
    { id: 'controls',             label: 'Controls' },
    { id: 'tabs',                 label: 'Tabs' },
    { id: 'feedback',             label: 'Feedback' },
    { id: 'table-pagination',     label: 'Table & Pagination' },
    { id: 'empty-tags',           label: 'Empty States & Tags' },
    { id: 'patterns-forms',       label: 'Patterns — Forms' },
    { id: 'patterns-confirmation', label: 'Patterns — Confirmation Dialogs' },
    { id: 'patterns-header',      label: 'Patterns — Page Header' },
    { id: 'patterns-toolbar',     label: 'Patterns — Toolbar & Filters' },
    { id: 'patterns-cards',       label: 'Patterns — Card Variants' },
    { id: 'forms-select',         label: 'Forms — Select & Combobox' },
    { id: 'forms-date',           label: 'Forms — Date Input' },
    { id: 'feedback-skeleton',    label: 'Feedback — Skeleton' },
    { id: 'forms-inline-validation', label: 'Forms — Inline Validation' },
    { id: 'theme-dark',           label: 'Theme — Dark Mode' },
    { id: 'theme-alias',          label: 'Theme — Brand Aliases' },
    { id: 'iconography',          label: 'Iconography' },
    { id: 'governance',           label: 'Governance' },
    { id: 'templates-shell',          label: 'Templates — App Shell' },
    { id: 'layout-vertical-rhythm',   label: 'Layout — Vertical Rhythm' },
  ]
  // Example table rows (static)
  const rows = [
    { name: 'WETH/USDC', value: '$5,000', date: '2025-06-01' },
    { name: 'DAI/USDC', value: '$2,300', date: '2025-06-02' },
    { name: 'WBTC/WETH', value: '$9,100', date: '2025-06-03' }
  ]

  return (
    <>
      <style>{`html{ scroll-behavior:smooth; }`}</style>
    <DocsPage>
      <div className="grid gap-3">
        <DocsSearch items={DOC_SECTIONS} />
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-6">
        {/* Left Rail: Table of Contents */}
        <div className="hidden lg:block">
          <DocsToc
            sections={[
              { id: 'foundations-layout',   label: 'Layout & Breakpoints' },
              { id: 'foundations-motion',   label: 'Motion' },
              { id: 'foundations-density',  label: 'Density' },
              { id: 'foundations-zindex',   label: 'Z-Index' },
              { id: 'foundations-dataviz',  label: 'Data-Viz' },
              { id: 'controls',             label: 'Controls' },
              { id: 'tabs',                 label: 'Tabs' },
              { id: 'feedback',             label: 'Feedback' },
              { id: 'table-pagination',     label: 'Table & Pagination' },
              { id: 'empty-tags',           label: 'Empty States & Tags' },
              { id: 'patterns-forms',       label: 'Patterns — Forms' },
              { id: 'patterns-confirmation', label: 'Patterns — Confirmation Dialogs' },
              { id: 'patterns-header',      label: 'Patterns — Page Header' },
              { id: 'patterns-toolbar',     label: 'Patterns — Toolbar & Filters' },
              { id: 'patterns-cards',       label: 'Patterns — Card Variants' },
              { id: 'forms-select',         label: 'Forms — Select & Combobox' },
              { id: 'forms-date',           label: 'Forms — Date Input' },
              { id: 'feedback-skeleton',    label: 'Feedback — Skeleton' },
              { id: 'forms-inline-validation', label: 'Forms — Inline Validation' },
              { id: 'theme-dark',           label: 'Theme — Dark Mode' },
              { id: 'theme-alias',          label: 'Theme — Brand Aliases' },
              { id: 'iconography',          label: 'Iconography' },
              { id: 'governance',           label: 'Governance' },
              { id: 'templates-shell',          label: 'Templates — App Shell' },
              { id: 'layout-vertical-rhythm',   label: 'Layout — Vertical Rhythm' },
            ]}
          />
        </div>

        {/* Right Column: Main Content */}
        <div>
          {/* ===================================== */}
          {/* FOUNDATIONS: Layout & Breakpoints     */}
          {/* ===================================== */}
          <DocsSection id="foundations-layout" title="Layout & Breakpoints" subtitle="Container widths and the 12‑column grid.">
        <SpecimenCard>
          <div className="text-sm font-medium mb-2">12‑Col Grid (Desktop)</div>
          <GridOverlay>
            <div className="grid grid-cols-12 gap-3">
              <PharosCard className="col-span-4"><div className="p-4">4 cols</div></PharosCard>
              <PharosCard className="col-span-8"><div className="p-4">8 cols</div></PharosCard>
              <PharosCard className="col-span-12"><div className="p-4">12 cols</div></PharosCard>
            </div>
          </GridOverlay>
        </SpecimenCard>

        <SpecimenCard>
          <div className="text-sm font-medium mb-2">Responsive Example</div>
          <GridOverlay>
            <div className="grid grid-cols-12 gap-3">
              <PharosCard className="col-span-12 md:col-span-6 lg:col-span-4"><div className="p-4">A</div></PharosCard>
              <PharosCard className="col-span-12 md:col-span-6 lg:col-span-4"><div className="p-4">B</div></PharosCard>
              <PharosCard className="col-span-12 lg:col-span-4"><div className="p-4">C</div></PharosCard>
            </div>
          </GridOverlay>
        </SpecimenCard>

        <SpecimenCard>
          <div className="text-sm font-medium mb-2">Container roles</div>
          <div className="text-sm text-slate-700">
            <div className="grid md:grid-cols-2 gap-3">
              <PharosCard><div className="p-4"><div className="font-medium mb-1">Widths</div><ul className="list-disc list-inside space-y-1 text-slate-700 text-sm"><li>sm: 640px</li><li>md: 768px</li><li>lg: 1024px</li><li>xl: 1280px</li><li>2xl: 1536px</li></ul></div></PharosCard>
              <PharosCard><div className="p-4"><div className="font-medium mb-1">Gutters & grid</div><ul className="list-disc list-inside space-y-1 text-slate-700 text-sm"><li>Page gutters: px-4 (mobile), wider on desktop</li><li>Grid: 12 columns, gap-3 (12px)</li><li>Cards avoid nested borders; use single boundary</li></ul></div></PharosCard>
            </div>
          </div>
        </SpecimenCard>
      </DocsSection>

      {/* ==================== */}
      {/* FOUNDATIONS: Motion  */}
      {/* ==================== */}
      <DocsSection id="foundations-motion" title="Motion" subtitle="Durations and easing tokens.">
        <SpecimenCard>
          <div className="text-sm font-medium mb-2">Tokens</div>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <PharosCard><div className="p-4 space-y-1"><div><code>--ph-global-motion-fast</code> = 120ms</div><div><code>--ph-global-motion-base</code> = 150ms</div><div><code>--ph-global-motion-slow</code> = 240ms</div><div><code>--ph-global-motion-ease</code> = cubic-bezier(.2,.8,.2,1)</div></div></PharosCard>
            <PharosCard><div className="p-4 space-y-1"><div className="font-medium mb-1">Canonical transitions</div><pre className="text-xs bg-slate-50 rounded-xl p-3 overflow-auto"><code>{`/* Hover/press */\ntransition: all var(--ph-global-motion-base) var(--ph-global-motion-ease);\n\n/* Enter/exit */\nopacity: 0; transform: translateY(4px);\ntransition: opacity var(--ph-global-motion-base) var(--ph-global-motion-ease),\n            transform var(--ph-global-motion-base) var(--ph-global-motion-ease);\n\n/* Tooltip fade (timing only) */\ntransition: opacity var(--ph-global-motion-fast) var(--ph-global-motion-ease);`}</code></pre></div></PharosCard>
          </div>
        </SpecimenCard>
      </DocsSection>

      {/* ==================== */}
      {/* FOUNDATIONS: Density */}
      {/* ==================== */}
      <DocsSection id="foundations-density" title="Density" subtitle="Regular vs Compact spacing.">
        <SpecimenCard>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="ph-density-regular">
              <div className="text-sm font-medium mb-2">Regular</div>
              <div className="rounded-2xl border border-slate-200 bg-white shadow-pharos p-4">
                <div className="grid gap-3">
                  <div className="ph-control rounded-xl border border-slate-200"><LabeledInput id="dr1" label="Strategy name" placeholder="Enter name" /></div>
                  <div className="ph-control rounded-xl border border-transparent"><PharosButton>Save</PharosButton></div>
                </div>
              </div>
            </div>
            <div className="ph-density-compact">
              <div className="text-sm font-medium mb-2">Compact</div>
              <div className="rounded-2xl border border-slate-200 bg-white shadow-pharos p-4">
                <div className="grid gap-3">
                  <div className="ph-control rounded-xl border border-slate-200"><LabeledInput id="dc1" label="Strategy name" placeholder="Enter name" /></div>
                  <div className="ph-control rounded-xl border border-transparent"><PharosButton>Save</PharosButton></div>
                </div>
              </div>
            </div>
          </div>
        </SpecimenCard>
        {/* Scoped density helpers using token variables */}
        <style>{`
          .ph-density-regular .ph-control { padding: var(--ph-global-spacing-12); }
          .ph-density-regular .ph-card { padding: var(--ph-global-spacing-16); }
          .ph-density-compact .ph-control { padding: var(--ph-global-spacing-8); }
          .ph-density-compact .ph-card { padding: var(--ph-global-spacing-12); }
        `}</style>
      </DocsSection>

      {/* =================== */}
      {/* FOUNDATIONS: Z‑Index */}
      {/* =================== */}
      <DocsSection id="foundations-zindex" title="Z‑Index" subtitle="Layer stack.">
        <SpecimenCard>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <PharosCard><div className="p-4"><div className="font-medium">Header</div><div className="text-slate-600">z = 30</div></div></PharosCard>
            <PharosCard><div className="p-4"><div className="font-medium">Overlay</div><div className="text-slate-600">z = 40</div></div></PharosCard>
            <PharosCard><div className="p-4"><div className="font-medium">Popover</div><div className="text-slate-600">z = 50</div></div></PharosCard>
          </div>
        </SpecimenCard>
      </DocsSection>

      {/* ===================== */}
      {/* FOUNDATIONS: Data‑Viz */}
      {/* ===================== */}
      <DocsSection id="foundations-dataviz" title="Data‑Viz" subtitle="Brand vs baseline.">
        <SpecimenCard>
          <div className="text-sm font-medium mb-2">Series palette</div>
          <div className="grid md:grid-cols-2 gap-3">
            <PharosCard>
              <div className="p-4 grid grid-cols-5 gap-3 items-end">
                <div className="text-xs text-slate-600 col-span-5">Strategy & baseline</div>
                <div className="h-10 rounded-xl bg-brand" />
                <div className="h-10 rounded-xl bg-slate-500" />
                <div className="h-10 rounded-xl bg-slate-300" />
                <div className="h-10 rounded-xl bg-slate-600" />
                <div className="h-10 rounded-xl bg-slate-700" />
              </div>
            </PharosCard>
            <PharosCard>
              <div className="p-4">
                <div className="font-medium mb-2">Recharts theme (static snippet)</div>
                <pre className="text-xs bg-slate-50 rounded-xl p-3 overflow-auto"><code>{`// Line/Area only\n<Line dataKey="vault" stroke="var(--ph-global-color-brand)" />\n<Line dataKey="hodl" stroke="rgb(100 116 139)" /> {/* slate-500 */}\n<CartesianGrid strokeDasharray="3 3" opacity={0.4} />\n<Tooltip /> // concise labels`}</code></pre>
                <div className="mt-2 text-xs text-slate-600">Do: line/area only; limit series; neutral baselines. Don't: pies, 3D, rainbow palettes, low-contrast tints.</div>
              </div>
            </PharosCard>
          </div>
        </SpecimenCard>
      </DocsSection>

      {/* ======================================= */}
      {/* COMPONENTS — CONTROLS (STATE GRIDS)    */}
      {/* ======================================= */}
      <DocsSection id="controls" title="Controls" subtitle="Checkbox, Radio, Switch — default/focus/disabled/checked">
        <SpecimenCard>
          <StateGrid cols={["Default","Focus","Disabled","Checked","Checked + Disabled"]}>
            <StateRow label="Checkbox" cells={[
              <PharosCheckbox id="cb1" label="Receive alerts" />, 
              <div className="ring-2 ring-brand ring-offset-2 inline-block rounded-xl p-3"><PharosCheckbox id="cb2" label="Focus" /></div>,
              <PharosCheckbox id="cb3" label="Disabled" disabled />, 
              <PharosCheckbox id="cb4" label="Checked" checked />, 
              <PharosCheckbox id="cb5" label="Checked" checked disabled />
            ]} />
            <StateRow label="Radio" cells={[
              <PharosRadioGroup options={[{id:'r1',label:'Option A'}]} value="r1" />, 
              <div className="ring-2 ring-brand ring-offset-2 inline-block rounded-xl p-3"><PharosRadioGroup options={[{id:'r2',label:'Focus'}]} value="r2" /></div>,
              <PharosRadioGroup options={[{id:'r3',label:'Disabled'}]} value="r3" disabled />, 
              <PharosRadioGroup options={[{id:'r4',label:'A'},{id:'r5',label:'B'}]} value="r4" />, 
              <PharosRadioGroup options={[{id:'r6',label:'A'}]} value="r6" disabled />
            ]} />
            <StateRow label="Switch" cells={[
              <PharosSwitch id="sw1" label="Auto-rebalance" />, 
              <div className="ring-2 ring-brand ring-offset-2 inline-block rounded-xl p-3"><PharosSwitch id="sw2" label="Focus" /></div>,
              <PharosSwitch id="sw3" label="Disabled" disabled />, 
              <PharosSwitch id="sw4" label="Enabled" checked />, 
              <PharosSwitch id="sw5" label="Enabled" checked disabled />
            ]} />
          </StateGrid>
        </SpecimenCard>
      </DocsSection>

      {/* =============================== */}
      {/* NAVIGATION — TABS (STATIC)      */}
      {/* =============================== */}
      <DocsSection id="tabs" title="Tabs" subtitle="Static specimen; interactions disabled in docs.">
        <SpecimenCard>
          <PharosTabs 
            tabs={[
              { id: 'one', label: 'Overview', content: 'Overview content (static)' },
              { id: 'two', label: 'Alerts', content: 'Alerts content (static)' },
              { id: 'three', label: 'Performance', content: 'Performance content (static)' }
            ]}
            defaultTab="two"
          />
        </SpecimenCard>
      </DocsSection>

      {/* =============================== */}
      {/* FEEDBACK — TOAST/MODAL/DRAWER  */}
      {/* =============================== */}
      <DocsSection id="feedback" title="Feedback" subtitle="Static specimens for Toast, Modal, Drawer, Tooltip timing.">
        <div className="grid md:grid-cols-2 gap-3">
          <SpecimenCard><ToastCard /></SpecimenCard>
          <SpecimenCard><TooltipSpecimen /></SpecimenCard>
          <SpecimenCard><ModalSpecimen /></SpecimenCard>
          <SpecimenCard><DrawerSpecimen /></SpecimenCard>
        </div>
      </DocsSection>

      {/* =============================== */}
      {/* DATA DISPLAY — TABLE & PAGING  */}
      {/* =============================== */}
      <DocsSection id="table-pagination" title="Table & Pagination" subtitle="Minimal gridlines, sticky header; compact 14px text.">
        <SpecimenCard>
          <div className="grid gap-3">
            <PharosTable rows={rows} />
            <div className="flex justify-end"><Pagination /></div>
          </div>
        </SpecimenCard>
      </DocsSection>

      {/* ================================== */}
      {/* EMPTY STATES & TAG VARIANTS        */}
      {/* ================================== */}
      <DocsSection id="empty-tags" title="Empty States & Tags" subtitle="Guidance for first-use moments and metadata chips.">
        <div className="grid md:grid-cols-2 gap-3">
          <SpecimenCard><EmptyState /></SpecimenCard>
          <SpecimenCard>
            <div className="grid gap-2">
              <div className="text-sm font-medium">Tags</div>
              <div className="flex flex-wrap gap-2">
                <Tag>Default</Tag>
                <Tag tone="success">Healthy</Tag>
                <Tag tone="warning">Warning</Tag>
                <Tag tone="error">Error</Tag>
                <Tag dismissible>Dismiss</Tag>
              </div>
              <div className="text-xs text-slate-600">Use tags for lightweight metadata; prefer StatusChip for status communication.</div>
            </div>
          </SpecimenCard>
        </div>
      </DocsSection>

      {/* ======================================= */}
      {/* PATTERNS — PHASE 4 COMPONENTS          */}
      {/* ======================================= */}
      <DocsSection id="patterns-forms" title="Patterns — Forms" subtitle="Two‑column layout, validation placement, concise helper text.">
        <SpecimenCard>
          <FormPattern />
        </SpecimenCard>
      </DocsSection>

      <DocsSection id="patterns-confirmation" title="Patterns — Confirmation Dialogs" subtitle="Neutral vs destructive flows with clear CTAs.">
        <SpecimenCard>
          <ConfirmDialogSpec />
        </SpecimenCard>
      </DocsSection>

      <DocsSection id="patterns-header" title="Patterns — Page Header" subtitle="Title, helper, and action buttons with responsive collapse.">
        <SpecimenCard>
          <PageHeader />
        </SpecimenCard>
      </DocsSection>

      <DocsSection id="patterns-toolbar" title="Patterns — Toolbar & Filters" subtitle="Chip filters + compact combobox controls.">
        <SpecimenCard>
          <ToolbarFilters />
        </SpecimenCard>
      </DocsSection>

      <DocsSection id="patterns-cards" title="Patterns — Card Variants" subtitle="Base, header actions, and divided sections.">
        <SpecimenCard>
          <CardVariants />
        </SpecimenCard>
      </DocsSection>

      <DocsSection id="forms-select" title="Forms — Select & Combobox" subtitle="Use Select for short lists; Combobox for ≥7 options. Static specimens.">
        <SpecimenCard>
          <SelectSpecimen />
        </SpecimenCard>
      </DocsSection>

      <DocsSection id="forms-date" title="Forms — Date Input" subtitle="Prefer native date input; provide text fallback (YYYY-MM-DD).">
        <SpecimenCard>
          <DateInputGuidelines />
        </SpecimenCard>
      </DocsSection>

      <DocsSection id="feedback-skeleton" title="Feedback — Skeleton" subtitle="Pulse for first load only; respect prefers-reduced-motion.">
        <SpecimenCard>
          <SkeletonSpecimen />
        </SpecimenCard>
      </DocsSection>

      <DocsSection id="forms-inline-validation" title="Forms — Inline Validation" subtitle="One actionable error beneath the field.">
        <SpecimenCard>
          <InlineValidationSpecimen />
        </SpecimenCard>
      </DocsSection>

      {/* ======================================= */}
      {/* TEMPLATES — APP SHELL                    */}
      {/* ======================================= */}
      <DocsSection id="templates-shell" title="Templates — App Shell" subtitle="No sidebar. 64px header, 16px gutters, 104px bottom menu.">
        <SpecimenCard>
          <AppShell>
            <div className="p-6">
              <h2 className="text-[20px] leading-[32px] font-semibold mb-4">App Shell Example</h2>
              <p className="text-slate-600">This demonstrates the mobile-first app shell with optional bottom navigation.</p>
            </div>
          </AppShell>
        </SpecimenCard>
      </DocsSection>

      {/* ======================================= */}
      {/* LAYOUT — VERTICAL RHYTHM                */}
      {/* ======================================= */}
      <DocsSection id="layout-vertical-rhythm" title="Layout — Vertical Rhythm" subtitle="Stacks for 16/32/24/8/16/40 spacing.">
        <SpecimenCard><PositionSetupSpecimen /></SpecimenCard>
      </DocsSection>

      {/* ======================================= */}
      {/* GOVERNANCE — PHASE 5 QUALITY CONTROLS  */}
      {/* ======================================= */}
      <DocsSection id="governance" title="Governance" subtitle="Versioning, contribution rules, and deprecations.">
        <SpecimenCard>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="font-medium mb-1">Versioning</div>
              <ul className="list-disc list-inside space-y-1">
                <li><b>Minor</b>: new components/props; no breaking changes.</li>
                <li><b>Patch</b>: bug fixes, docs copy updates.</li>
                <li><b>Major</b>: breaking tokens/props or removed components. Provide a migration note.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="font-medium mb-1">Deprecation policy</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Mark deprecated in docs with a badge and removal target.</li>
                <li>Keep for ≥1 minor release with a migration path.</li>
                <li>Remove in the next major, note in CHANGELOG.</li>
              </ul>
            </div>
          </div>
        </SpecimenCard>

        <SpecimenCard>
          <div className="font-medium mb-2 text-sm">PR checklist</div>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Uses semantic tokens; no raw hex; spacing ∈ {`{4,8,12,16,24,32}`}</li>
            <li>Only <code>shadow-pharos</code> or <code>shadow-pharos-sm</code>; single borders</li>
            <li>Focus visible on all interactive elements</li>
            <li>Docs specimen is static (no popovers); includes state grid where applicable</li>
            <li>Snapshots updated (<code>npm run test:update</code>) and reviewed</li>
            <li>CHANGELOG entry added</li>
          </ul>
        </SpecimenCard>
      </DocsSection>

      {/* ======================================= */}
      {/* THEME — DARK MODE                      */}
      {/* ======================================= */}
      <DocsSection id="theme-dark" title="Theme — Dark Mode" subtitle="Token-first overrides via :root.dark and .ph-dark.">
        <SpecimenCard>
          <div className="grid md:grid-cols-2 gap-3">
            <PharosCard>
              <div className="p-4 text-sm">
                <div className="font-medium mb-1">Light</div>
                <p className="text-slate-700 mb-3">Surface, border, and text use light tokens.</p>
                <PharosButton>Primary action</PharosButton>
              </div>
            </PharosCard>
            <div className="ph-dark">
              <PharosCard>
                <div className="p-4 text-sm">
                  <div className="font-medium mb-1">Dark</div>
                  <p className="text-slate-300 mb-3">Surface, border, and text use dark tokens.</p>
                  <PharosButton>Primary action</PharosButton>
                </div>
              </PharosCard>
            </div>
          </div>
        </SpecimenCard>
      </DocsSection>

      <DocsSection id="theme-alias" title="Theme — Brand Aliases" subtitle="Swap brand via CSS variable overrides without touching components.">
        <SpecimenCard>
          <div className="grid md:grid-cols-2 gap-3">
            <PharosCard>
              <div className="p-4 text-sm">
                <div className="font-medium mb-1">Default theme</div>
                <p className="text-slate-700 mb-3">Components use Tailwind <code>brand</code> mapped to alias tokens.</p>
                <PharosButton>Primary action</PharosButton>
              </div>
            </PharosCard>
            <div className="ph-theme-slate">
              <PharosCard>
                <div className="p-4 text-sm">
                  <div className="font-medium mb-1">Slate theme (scoped)</div>
                  <p className="text-slate-700 mb-3">Scoped override via <code>.ph-theme-slate</code>.</p>
                  <PharosButton>Primary action</PharosButton>
                </div>
              </PharosCard>
            </div>
          </div>
        </SpecimenCard>
      </DocsSection>

      <DocsSection id="iconography" title="Iconography" subtitle="Sizes 16/20/24 • stroke 1.5 • color inherits text.">
        <SpecimenCard>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm">
              <div className="font-medium mb-1">Sizes</div>
              <div className="flex items-center gap-3">
                <PharosIcon icon={Info} size={16} />
                <PharosIcon icon={Info} size={20} />
                <PharosIcon icon={Info} size={24} />
              </div>
              <div className="text-xs text-slate-600 mt-2">Allowed sizes: 16, 20 (default), 24</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm">
              <div className="font-medium mb-1">Stroke</div>
              <div className="flex items-center gap-3">
                <PharosIcon icon={Check} size={20} strokeWidth={1} />
                <PharosIcon icon={Check} size={20} strokeWidth={1.5} />
                <PharosIcon icon={Check} size={20} strokeWidth={2} />
              </div>
              <div className="text-xs text-slate-600 mt-2">Default stroke: 1.5</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm">
              <div className="font-medium mb-1">Color (inherits)</div>
              <div className="flex items-center gap-3">
                <span className="text-slate-700"><PharosIcon icon={AlertTriangle} /></span>
                <span className="text-brand"><PharosIcon icon={AlertTriangle} /></span>
                <span className="text-red-600"><PharosIcon icon={AlertTriangle} /></span>
              </div>
              <div className="text-xs text-slate-600 mt-2">Icons use <code>currentColor</code> via text utilities.</div>
            </div>
          </div>
          <div className="text-xs text-slate-600 mt-3">
            Accessibility: if an icon is informative, set <code>aria-label</code>. If decorative, set <code>aria-hidden</code>.
          </div>
        </SpecimenCard>
      </DocsSection>
        </div>
      </div>
      </div>
    </DocsPage>
    </>
  )
}
