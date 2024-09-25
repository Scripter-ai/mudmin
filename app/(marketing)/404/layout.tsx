export default function NotFoundLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-[#FFFFFF]">
        {children}
      </section>
    )
  }
