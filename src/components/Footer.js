import Image from "next/image"

export default function Footer() {
  return (
    <div>
      <hr className="m-10 border-gray-800"></hr>
      <div className="flex justify-center gap-5 pb-3">
        <a href="https://github.com/JaredSchips"><Image src='/github.svg' width={32} height={32} alt='' /></a>
        <a href="https://www.linkedin.com/in/jared-schips/"><Image src='/linkedin.svg' width={32} height={32} alt='' /></a>
        <a href="mailto:jared.schips@gmail.com"><Image src='/email.svg' width={32} height={32} alt='' /></a>
      </div>
    </div>
  )
}