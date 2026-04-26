import ApplyForm from "./apply-form"

export default function ApplyPage({
  searchParams
}: {
  searchParams: { role?: string }
}) {

  return (

    <ApplyForm roleFromURL={searchParams.role ?? ""} />

  )

}