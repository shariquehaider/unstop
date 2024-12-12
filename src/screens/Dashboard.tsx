import Card from "@/components/Card"

function Dashboard() {
  return (
    <>
      <div className="bg-[#FFFFFF] flex flex-col items-center justify-between p-[80px_20px] gap-[100px]">
        <div className="flex flex-col">
          <p className="text-[1.4rem] text-black font-normal">Welcome to</p>
          <p className="text-[2.2rem] text-[#6358DC] font-black">Unstop</p>
        </div>
        <div>
          <Card/>
        </div>
      </div>
    </>
  )
}

export default Dashboard