import IconRail from './IconRail'
import InboxList from './InboxList'
import ActiveThread from './ActiveThread'

function ProductPanel({ ref }: { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className="relative z-10 mx-auto w-[90vw] max-w-[1400px] px-6 pb-20 sm:pb-28">
      <div className="flex h-[640px] overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        <IconRail />
        <InboxList />
        <ActiveThread />
      </div>
    </div>
  )
}

export default ProductPanel
