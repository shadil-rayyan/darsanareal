import { useCallback } from 'react';
import {useRouter} from "next/router";



// const ScholarshipContactUsPage = () => {
//   	const router = useRouter();
  	
//   	const onConactUsSnavbarClick = useCallback(() => {
//     		router.push("/");
//   	}, [router]);
  	
  	return (
    		<div className="w-full relative bg-white h-[1722px] overflow-hidden text-center text-13xl text-black font-text-regular-link">
      			<b className="absolute top-[150px] left-[427px] tracking-[0.16px] leading-[34.56px] uppercase font-roboto-condensed text-transparent !bg-clip-text [background:linear-gradient(89.86deg,_rgba(26,_27,_65,_0),_rgba(253,_241,_241,_0.9)),_linear-gradient(90.14deg,_#a2bccb,_rgba(24,_77,_183,_0.82)_26%,_#305db5_51.5%,_rgba(29,_55,_107,_0.9)_73.5%,_#223e75)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_#491fa0,_0_1px_0_#491fa0,_-1px_0_0_#491fa0,_0_-1px_0_#491fa0]">Educate With Biju Cherian Scholarship</b>
      			<img className="absolute top-[922px] left-[150px] w-12 h-12 overflow-hidden" alt="" src="Icon / Email.svg" />
      			<div className="absolute top-[997px] left-[143px] w-[250px] flex flex-col items-end justify-center gap-[24px] text-left">
        				<div className="self-stretch flex flex-col items-end justify-center gap-[16px]">
          					<b className="self-stretch relative leading-[130%]">Email</b>
          					<div className="w-[405.3px] relative text-base leading-[150%] hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</div>
        				</div>
        				<div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">hello@relume.io</div>
      			</div>
      			<div className="absolute top-[936px] left-[463px] w-[560px] flex flex-col items-center justify-start gap-[16px]">
        				<div className="self-stretch relative leading-[130%] font-semibold">Still have a question?</div>
          					<div className="w-[602px] relative text-lg leading-[150%] inline-block">visit our contact us page or click the button below for taking you there</div>
          					</div>
          					<div className="absolute top-[916px] left-[1146px] w-[250px] flex flex-col items-start justify-start gap-[24px] text-left">
            						<img className="w-12 relative h-12 overflow-hidden shrink-0" alt="" src="Icon / Phone.svg" />
            						<div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              							<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                								<b className="self-stretch relative leading-[130%]">Phone</b>
                								<div className="w-[405.3px] relative text-base leading-[150%] hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</div>
              							</div>
              							<div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">+1 (555) 000-0000</div>
            						</div>
          					</div>
          					<div className="absolute top-[1052px] left-[693px] w-[100px] h-[45px] text-[13px] text-white">
            						<div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-royalblue w-[100px] h-[45px]" />
            						<div className="absolute top-[15px] left-[15.09px] font-semibold inline-block w-[73.9px] h-4">Contact us</div>
          					</div>
          					<div className="absolute top-[670px] left-[78px] flex flex-row flex-wrap items-start justify-start text-mini">
            						<div className="w-[311.3px] relative bg-steelblue-100 h-[70px] text-base text-white">
              							<div className="absolute top-[17px] left-[101px] tracking-[0.16px] leading-[34.56px] font-medium">About Program</div>
            						</div>
            						<div className="w-[311.3px] relative bg-steelblue-100 h-[70px]">
              							<div className="absolute top-[28px] left-[calc(50%_-_73.65px)] tracking-[0.6px] leading-[20.8px] font-medium flex items-center justify-center w-[117px] h-3.5">Eligibilty</div>
            						</div>
            						<div className="w-[311.5px] relative bg-steelblue-100 h-[70px] font-raleway">
              							<div className="absolute top-[15px] left-[calc(50%_-_52.98px)] tracking-[0.16px] leading-[34.56px] font-medium flex items-center justify-center w-[107.5px] h-[39px]">FAQ</div>
            						</div>
            						<div className="w-[311.5px] relative bg-steelblue-200 h-[70px] cursor-pointer font-raleway" onClick={onConactUsSnavbarClick}>
              							<div className="absolute top-[28px] left-[calc(50%_-_52.75px)] tracking-[0.16px] leading-[34.56px] font-medium flex items-center justify-center w-[137px] h-3.5">Contact us</div>
            						</div>
          					</div>
          					</div>);
        				};
        				
        				export default ScholarshipContactUsPage;
        				