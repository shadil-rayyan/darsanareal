import { useCallback } from 'react';



const Chapters = () => {
  	
  	const onBangaloreContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onPalkkadContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onCalicutImageContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onOmanCardContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onSaudiCardClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onUaeImageContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onChapterRow3Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className="w-full relative bg-assignment-1-white h-[1405px] overflow-hidden text-left text-17xl text-assignment-1-dark-bluish-grey font-roboto">
      			<div className="absolute top-[142px] left-[74px] flex flex-row flex-wrap items-start justify-center gap-[56px]">
        				<div className="w-[402px] bg-assignment-1-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-darkgray" onClick={onBangaloreContainerClick}>
          					<img className="w-[402px] relative h-[216px] overflow-hidden shrink-0 object-cover" alt="" src="bangalore.png" />
          					<div className="w-[402px] relative h-[94px]">
            						<div className="absolute top-[26px] left-[135px] flex flex-col items-start justify-start">
              							<div className="w-[165px] relative font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Banglore</div>
            						</div>
          					</div>
        				</div>
        				<div className="w-[402px] bg-assignment-1-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start cursor-pointer text-center border-[1px] border-solid border-darkgray" onClick={onPalkkadContainerClick}>
          					<img className="w-[402px] relative h-[216px] overflow-hidden shrink-0 object-cover" alt="" src="palkkad.png" />
          					<div className="w-[402px] relative h-[94px]">
            						<div className="absolute top-[26px] left-[135px] flex flex-col items-start justify-start">
              							<div className="w-[165px] relative font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Palkkad</div>
            						</div>
          					</div>
        				</div>
        				<div className="w-[402px] bg-assignment-1-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-darkgray" onClick={onCalicutImageContainerClick}>
          					<img className="w-[402px] relative h-[216px] overflow-hidden shrink-0 object-cover" alt="" src="Calicut.png" />
          					<div className="w-[402px] relative h-[94px]">
            						<div className="absolute top-[26px] left-[135px] flex flex-col items-start justify-start">
              							<div className="w-[165px] relative font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Calicut</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className="absolute top-[500px] left-[74px] flex flex-row flex-wrap items-start justify-center gap-[56px]">
        				<div className="w-[402px] bg-assignment-1-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-darkgray" onClick={onOmanCardContainerClick}>
          					<img className="w-[402px] relative h-[216px] overflow-hidden shrink-0 object-cover" alt="" src="Oman chapter image.png" />
          					<div className="w-[402px] relative h-[94px]">
            						<div className="absolute top-[26px] left-[135px] flex flex-col items-start justify-start">
              							<div className="w-[165px] relative font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Oman</div>
            						</div>
          					</div>
        				</div>
        				<div className="w-[402px] bg-assignment-1-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start cursor-pointer text-center border-[1px] border-solid border-darkgray" onClick={onSaudiCardClick}>
          					<img className="w-[402px] relative h-[216px] overflow-hidden shrink-0 object-cover" alt="" src="saudi image.png" />
          					<div className="w-[402px] relative h-[94px]">
            						<div className="absolute top-[26px] left-[135px] flex flex-col items-start justify-start">
              							<div className="w-[165px] relative font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">Saudi</div>
            						</div>
          					</div>
        				</div>
        				<div className="w-[402px] bg-assignment-1-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-darkgray" onClick={onUaeImageContainerClick}>
          					<img className="w-[402px] relative h-[216px] overflow-hidden shrink-0 object-cover" alt="" src="uae chapter image.png" />
          					<div className="w-[402px] relative h-[94px]">
            						<div className="absolute top-[26px] left-[135px] w-[270px] h-[42px]" />
            						<div className="absolute top-[26px] left-[59px] font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-[270px]">UAE</div>
          					</div>
        				</div>
      			</div>
      			<div className="absolute top-[858px] left-[74px] flex flex-row flex-wrap items-start justify-center cursor-pointer" onClick={onChapterRow3Click}>
        				<div className="w-[402px] bg-assignment-1-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start border-[1px] border-solid border-darkgray">
          					<img className="w-[402px] relative h-[216px] overflow-hidden shrink-0 object-cover" alt="" src="chapter north america.png" />
          					<div className="w-[402px] relative h-[94px]">
            						<div className="absolute top-[26px] left-[135px] w-[245px] h-[39px]" />
            						<div className="absolute top-[26px] left-[78px] font-semibold inline-block overflow-hidden text-ellipsis w-[245px] h-[39px]">North America</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Chapters;
