import { useCallback } from 'react';



const ScholarshipEligibilty = () => {
  	
  	// const onConactUsSnavbarClick = useCallback(() => {
    // 		// Add your code here
  	// }, []);
  	
  	return (
    		<div className="w-full relative bg-white h-[1998px] overflow-hidden text-center text-[32px] text-black font-roboto">
      			<b className="absolute top-[150px] left-[400px] tracking-[0.16px] leading-[34.56px] uppercase font-roboto-condensed text-transparent !bg-clip-text [background:linear-gradient(89.86deg,_rgba(26,_27,_65,_0),_rgba(253,_241,_241,_0.9)),_linear-gradient(90.14deg,_#a2bccb,_rgba(24,_77,_183,_0.82)_26%,_#305db5_51.5%,_rgba(29,_55,_107,_0.9)_73.5%,_#223e75)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_#491fa0,_0_1px_0_#491fa0,_-1px_0_0_#491fa0,_0_-1px_0_#491fa0]">Educate With Biju Cherian Scholarship</b>
      			<div className="absolute top-[638px] left-[36px] flex flex-row flex-wrap items-start justify-start text-mini">
        				<div className="w-[311.3px] relative bg-steelblue-200 h-[70px] text-[16px]">
          					<div className="absolute top-[17px] left-[101px] tracking-[0.16px] leading-[34.56px] font-medium">About Program</div>
        				</div>
        				<div className="w-[311.3px] relative bg-steelblue-300 h-[70px] text-white">
          					<div className="absolute top-[28px] left-[calc(50%_-_73.65px)] tracking-[0.6px] leading-[20.8px] font-medium flex items-center justify-center w-[117px] h-3.5">Eligibilty</div>
        				</div>
        				<div className="w-[311.5px] relative bg-steelblue-200 h-[70px] font-raleway">
          					<div className="absolute top-[15px] left-[calc(50%_-_52.98px)] tracking-[0.16px] leading-[34.56px] font-medium flex items-center justify-center w-[107.5px] h-[39px]">FAQ</div>
        				</div>
        				<div className="w-[311.5px] relative bg-steelblue-100 h-[70px] cursor-pointer font-raleway" onClick={onConactUsSnavbarClick}>
          					<div className="absolute top-[28px] left-[calc(50%_-_52.75px)] tracking-[0.16px] leading-[34.56px] font-medium flex items-center justify-center w-[137px] h-3.5">Contact us</div>
        				</div>
      			</div>
      			<div className="absolute top-[761px] left-[56px] text-[40px] tracking-[1px] leading-[40px] text-left">
        				<p className="m-0">Eligibility Criteria:</p>
        				<ul className="m-0 font-inherit text-inherit pl-[53px]">
          					<li className="mb-0">Be a resident of India.</li>
          					<li className="mb-0">Be a school or college student.</li>
          					<li className="mb-0">Fall within the age range of 5 to 25 years.</li>
        				</ul>
        				<p className="m-0">Documents Required:</p>
        				<ul className="m-0 font-inherit text-inherit pl-[53px]">
          					<li className="mb-0">Student ID proof(ID Card) issued by College.</li>
          					<li className="mb-0">Passport size Photo.</li>
          					<li className="mb-0">Aadhaar Card.</li>
          					<li className="mb-0">Income certificate</li>
          					<li>Check</li>
        				</ul>
      			</div>
    		</div>);
};

export default ScholarshipEligibilty;
