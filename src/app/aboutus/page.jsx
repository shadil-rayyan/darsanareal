import { useCallback } from 'react';



const Frame = () => {
  	
  	const onWhatwedoContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onObjectivesContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onGeneralInformationContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onChaptersContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onPresentLeadershipContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onOurStoryContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className="w-full relative h-[558px] text-left text-xs text-black font-raleway">
      			<div className="absolute top-[116px] left-[5.94px] w-[1226px] flex flex-row flex-wrap items-center justify-start gap-[77px]">
        				<img className="w-[565px] relative h-[281px] object-cover" alt="" src="image 21.png" />
        				<div className="w-[555px] relative tracking-[1px] leading-[27px] flex items-center h-[442px] shrink-0">
          					<span className="w-full">
            						<p className="m-0">Darsana was established in 2007 as a charitable society with a registered office
                         in Palakkad, Kerala. The idea for such an 
                         organization arose during a meeting of a 
                         few progressive-thinking students from 
                         the 1991 graduating class of NSS College 
                         of Engineering, Palakkad (NSSCE). The meeting was called to consider establishing an endowment for NSS College of Engineering Palakkad students in honor of their batchmate, the late Comrade Biju Cheriyan. This sparked the idea of bringing together all like-minded students from the 1960s to the millennium batches. Darsana was inaugurated on August 5, 2007, by the then honorable Education Minister of Kerala M. A. Baby in a function organized at the NSSCE campus. It was presided over by the college principal. The then member of parliament for Palakkad constituency, N. N. Krishnadas also attended.</p>
            						<p className="m-0">&nbsp;</p>
          					</span>
        				</div>
      			</div>
      			<div className="absolute top-[0px] left-[calc(50%_-_615.95px)] bg-steelblue-200 flex flex-row flex-wrap items-start justify-start text-center">
        				<div className="w-[162.8px] relative bg-steelblue-300 h-[70px] text-white">
          					<b className="absolute top-[27.5px] left-[calc(50%_-_38.51px)] tracking-[1px] leading-[25px] flex items-center justify-center w-[77.4px] h-3.5">OUR STORY</b>
        				</div>
        				<div className="w-[162.8px] relative bg-steelblue-200 h-[70px] cursor-pointer" onClick={onWhatwedoContainerClick}>
          					<div className="absolute top-[17.25px] left-[37.64px] tracking-[0.16px] leading-[34.56px] font-medium">WHAT WE DO</div>
        				</div>
        				<div className="w-[162.8px] relative bg-steelblue-100 h-[70px] cursor-pointer" onClick={onObjectivesContainerClick}>
          					<div className="absolute top-[28px] left-[calc(50%_-_45.09px)] tracking-[1px] leading-[16px] font-medium flex items-center justify-center w-[89px] h-3.5">OBJECTIVES</div>
        				</div>
        				<div className="w-[162.8px] relative bg-steelblue-200 h-[70px] cursor-pointer" onClick={onGeneralInformationContainerClick}>
          					<div className="absolute top-[15px] left-[calc(50%_-_53.63px)] tracking-[1px] leading-[25px] font-medium flex items-center justify-center w-[107.5px] h-[39px]">GENERAL INFORMATION</div>
        				</div>
        				<div className="w-[162.8px] relative bg-steelblue-100 h-[70px] cursor-pointer" onClick={onChaptersContainerClick}>
          					<div className="absolute top-[28px] left-[calc(50%_-_53.78px)] tracking-[1px] leading-[25px] font-medium flex items-center justify-center w-[108.7px] h-3.5">CHAPTERS</div>
        				</div>
        				<div className="w-[162.8px] relative bg-steelblue-200 h-[70px] cursor-pointer" onClick={onPresentLeadershipContainerClick}>
          					<div className="absolute top-[13px] left-[calc(50%_-_43.4px)] tracking-[1px] leading-[25px] font-medium flex items-center w-[103px] h-11">
            						<span className="[line-break:anywhere] w-full">
              							<p className="m-0">PRESENT</p>
              							<p className="m-0">LEADERSHIP</p>
            						</span>
          					</div>
        				</div>
        				<div className="w-[162.8px] relative bg-steelblue-100 h-[70px] cursor-pointer" onClick={onOurStoryContainerClick}>
          					<div className="absolute top-[15px] left-[calc(50%_-_51.46px)] tracking-[1px] leading-[25px] font-medium flex items-center justify-center w-[101.7px] h-[39px]">TIMELINE</div>
        				</div>
      			</div>
    		</div>);
};

export default Frame;
