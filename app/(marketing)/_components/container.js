import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx(
        'sm:px-6 lg:px-8 px-4',
        className,
      )}
      {...props}
    />
  )
}
