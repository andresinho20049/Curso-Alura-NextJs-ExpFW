import HeadNext from 'next/head'

export default function PageTitle({title, ...props}) {
    return (
        <HeadNext>
          <title>{title}</title>
        </HeadNext>
    )
}