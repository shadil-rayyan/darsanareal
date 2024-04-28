import { useCallback } from 'react';



const Frame = () => {
  	
  	const onDivelementorWidgetWrapContainer1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onDivelementorWidgetWrapContainer2Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onDivelementorWidgetWrapContainer3Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onDivelementorWidgetWrapContainer4Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onDivelementorWidgetWrapContainer5Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onDivelementorWidgetWrapContainer6Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className="w-full relative h-[448px] text-left text-xs text-black font-raleway">
      			<div className="absolute top-[167px] left-[26px] w-[1140px] h-[281px]">
        				<div className="absolute top-[0px] left-[0px] tracking-[1px] leading-[27px] flex items-center w-[521px]">
          					<span className="w-full">
            						<p className="m-0">We have undertaken many socially relevant initiatives in education, waste management, sustainable construction methods, e-governance at panchayat level and many more in addition to various charity initiatives like sponsoring economically weak students etc. We are the organisers of Biju Cherian Scholarship which finacially supports more than 40 engineering students with an annual budget outlay of Rs 5 lakhs.</p>
            						<p className="m-0">We are the proud organizers of IGNITE, the biggest innovatiion contest held for college students in Kerala. We are also very active in designing and constructing alternate and sustainable houses. Darsana so far built 10 houses for the needy.</p>
          					</span>
        				</div>
        				<img className="absolute top-[0px] left-[575px] w-[565px] h-[281px] object-cover" alt="" src="image 20.png" />
      			</div>
      			<div className="absolute top-[0px] left-[calc(50%_-_583px)] bg-steelblue-200 w-[1140px] h-[70px] text-center">
        				<div className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[977.2px] bottom-[0px] left-[0px] bg-steelblue-100 text-white">
          					<b className="absolute top-[27.5px] left-[calc(50%_-_38.51px)] tracking-[1px] leading-[25px] flex items-center justify-center w-[77.4px] h-3.5">OUR STORY</b>
        				</div>
        				<div className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[814.36px] bottom-[0px] left-[162.84px] bg-steelblue-300 cursor-pointer" onClick={onDivelementorWidgetWrapContainer1Click}>
          					<div className="absolute top-[17.25px] left-[37.64px] tracking-[0.16px] leading-[34.56px] font-medium">WHAT WE DO</div>
        				</div>
        				<div className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[651.51px] bottom-[0px] left-[325.69px] bg-steelblue-100 cursor-pointer" onClick={onDivelementorWidgetWrapContainer2Click}>
          					<div className="absolute top-[28px] left-[calc(50%_-_45.09px)] tracking-[1px] leading-[16px] font-medium flex items-center justify-center w-[89px] h-3.5">OBJECTIVES</div>
        				</div>
        				<div className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[488.67px] bottom-[0px] left-[488.53px] bg-steelblue-200 cursor-pointer" onClick={onDivelementorWidgetWrapContainer3Click}>
          					<div className="absolute top-[15px] left-[calc(50%_-_53.63px)] tracking-[1px] leading-[25px] font-medium flex items-center justify-center w-[107.5px] h-[39px]">GENERAL INFORMATION</div>
        				</div>
        				<div className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[325.82px] bottom-[0px] left-[651.38px] bg-steelblue-100 cursor-pointer" onClick={onDivelementorWidgetWrapContainer4Click}>
          					<div className="absolute top-[28px] left-[calc(50%_-_53.78px)] tracking-[1px] leading-[25px] font-medium flex items-center justify-center w-[108.7px] h-3.5">CHAPTERS</div>
        				</div>
        				<div className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[163.2px] bottom-[0px] left-[814px] bg-steelblue-200 cursor-pointer" onClick={onDivelementorWidgetWrapContainer5Click}>
          					<div className="absolute top-[13px] left-[calc(50%_-_43.4px)] tracking-[1px] leading-[25px] font-medium flex items-center w-[103px] h-11">
            						<span className="[line-break:anywhere] w-full">
              							<p className="m-0">PRESENT</p>
              							<p className="m-0">LEADERSHIP</p>
            						</span>
          					</div>
        				</div>
        				<div className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[3.2px] bottom-[0px] left-[974px] bg-steelblue-100 cursor-pointer" onClick={onDivelementorWidgetWrapContainer6Click}>
          					<div className="absolute top-[15px] left-[calc(50%_-_51.46px)] tracking-[1px] leading-[25px] font-medium flex items-center justify-center w-[101.7px] h-[39px]">TIMELINE</div>
        				</div>
      			</div>
    		</div>);
};

export default Frame;
