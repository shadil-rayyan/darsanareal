import Link from 'next/link';
const DropDown = () => {
  return (
	<div className="w-full relative h-[75px] text-left text-base text-black font-roboto">
	<div className="absolute top-[9.15px] left-[0px] rounded-[5px] box-border w-[219px] h-[65.9px] border-[1px] border-solid border-black" />
	<div className="absolute top-[0px] left-[11px] bg-white w-[129px] h-[16.5px]" />
	<div className="absolute top-[1.83px] left-[13px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center w-[125px] h-[16.5px]">Select Chapter</div>
	<div className="absolute top-[33.84px] left-[25px] text-[24px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center w-[121px] h-[16.5px]">
	  <Link href="/bangalore">
		<span>Bangalore</span>
	  </Link>
	</div>
	<img className="absolute h-[8.4%] w-[4.47%] top-[60.39%] right-[10.14%] bottom-[31.21%] left-[85.39%] max-w-full overflow-hidden max-h-full" alt="" src="Vector.svg" />
	<div className="absolute top-[98px] left-[0px] w-[209px] h-[269px] hidden text-center">
	  <div className="absolute top-[0px] left-[0px] w-[209px] h-11 cursor-pointer">
		<Link href="/palkkad">
		  <span>
			<div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[209px] h-11" />
			<div className="absolute top-[0px] left-[44px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">Palkkad</div>
		  </span>
		</Link>
	  </div>
	  <div className="absolute top-[45px] left-[0px] w-[209px] h-11 cursor-pointer">
		<Link href="/uae">
		  <span>
			<div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[209px] h-11" />
			<div className="absolute top-[0px] left-[44px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">UAE</div>
		  </span>
		</Link>
	  </div>
	  <div className="absolute top-[90px] left-[0px] w-[209px] h-11 cursor-pointer">
		<Link href="/saudi">
		  <span>
			<div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[209px] h-11" />
			<div className="absolute top-[0px] left-[44px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">Saudi</div>
		  </span>
		</Link>
	  </div>
	  <div className="absolute top-[135px] left-[0px] w-[209px] h-11 cursor-pointer">
		<Link href="/oman">
		  <span>
			<div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[209px] h-11" />
			<div className="absolute top-[0px] left-[48px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">Oman</div>
		  </span>
		</Link>
	  </div>
	  <div className="absolute top-[180px] left-[0px] w-[209px] h-11 cursor-pointer">
		<Link href="/calicut">
		  <span>
			<div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[209px] h-11" />
			<div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[209px] h-11" />
			<div className="absolute top-[0px] left-[27px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[155px] h-11">Calicut</div>
		  </span>
		</Link>
	  </div>
	  <div className="absolute top-[225px] left-[0px] w-[209px] h-11 cursor-pointer">
		<Link href="/north-america">
		  <span>
			<div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[209px] h-11" />
			<div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[209px] h-11" />
			<div className="absolute top-[0px] left-[46px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[155px] h-11">North America</div>
		  </span>
		</Link>
	  </div>
	</div>
  </div>
);
};

export default DropDown;
