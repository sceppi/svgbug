import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link className="block underline text-blue-600" href={"/withoutimport"}>
        Without import
      </Link>
      <Link className="block underline text-blue-600" href={"/withimport"}>
        With import
      </Link>
    </>
  );
}
