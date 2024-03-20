export function TailwindIndicator() {
    if (import.meta.env.PROD) return null

    return (
        <div className="tailwind-indicator fixed top-1 left-1 z-[100] flex size-8 items-center justify-center rounded-full bg-base-content font-mono text-xs text-red-100">
            <div className="sm:hidden">xs</div>
            <div className="max-sm:hidden md:hidden">sm</div>
            <div className="max-md:hidden lg:hidden">md</div>
            <div className="max-lg:hidden xl:hidden">lg</div>
            <div className="max-xl:hidden 2xl:hidden">xl</div>
            <div className="max-2xl:hidden">2xl</div>
        </div>
    )
}
