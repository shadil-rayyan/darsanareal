import { useCallback } from 'react';



const ProductList = () => {
  	
  	const onProductGContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className="w-full relative bg-dropdowns-backgrounds-bg-color-1 h-[1191px] overflow-hidden text-left text-base text-gray font-display-1-regular">
      			<div className="absolute top-[120px] left-[0px] box-border w-[1440px] h-16 overflow-hidden text-base-color-gray-800 border-[1px] border-solid border-black">
        				<div className="absolute h-[62.5%] w-[34.24%] top-[18.75%] right-[2.78%] bottom-[18.75%] left-[62.99%]">
          					<div className="absolute h-full w-[87.02%] top-[0%] right-[0%] bottom-[0%] left-[12.98%]">
            						<img className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full" alt="" src="◼️ Background.svg" />
            						<img className="absolute top-[7px] left-[388px] w-7 h-7 object-cover" alt="" src="image 41.png" />
            						<div className="absolute w-[20.77%] top-[22.5%] left-[3.79%] tracking-[-0.2px] leading-[24px] inline-block">Search</div>
          					</div>
          					<div className="absolute h-full w-[13.18%] top-[0%] right-[86.82%] bottom-[0%] left-[0%] text-[17px]">
            						<img className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full" alt="" src="◼️ Background.svg" />
            						<div className="absolute w-[53.85%] top-[22.5%] left-[18.46%] leading-[22px] font-medium inline-block">ALL</div>
          					</div>
          					<img className="absolute top-[16px] left-[50px] w-[11px] h-[5px] object-contain" alt="" src="Polygon 1.svg" />
        				</div>
      			</div>
      			<div className="absolute top-[597px] left-[101px] flex flex-row flex-wrap items-start justify-start gap-[18px]">
        				<div className="w-[296px] relative h-[358px]">
          					<div className="absolute top-[0px] left-[0px] w-[296px] h-[358px]">
            						<img className="absolute top-[0px] left-[1px] rounded-8xs w-[295px] h-[358px]" alt="" src="Rectangle 306.svg" />
            						<div className="absolute w-[64.86%] top-[77.37%] left-[9.46%] tracking-[-0.2px] leading-[24px] font-medium inline-block">{`cement making machine `}</div>
            						<img className="absolute top-[258px] left-[0px] rounded-8xs w-[295px] h-[0.5px] object-contain" alt="" src="Vector 3.svg" />
          					</div>
          					<img className="absolute top-[calc(50%_-_136px)] left-[calc(50%_-_105px)] w-[210px] h-[198.4px] object-cover" alt="" src="product page05.png" />
        				</div>
        				<div className="w-[295px] relative h-[358px]">
          					<div className="absolute top-[0px] left-[0px] w-[295px] h-[358px]">
            						<img className="absolute top-[0px] left-[0px] rounded-8xs w-[295px] h-[358px]" alt="" src="Rectangle 306.svg" />
            						<div className="absolute w-[65.08%] top-[77.37%] left-[9.15%] tracking-[-0.2px] leading-[24px] font-medium inline-block">flour making machine</div>
            						<img className="absolute top-[258px] left-[0.67px] rounded-8xs w-[293.3px] h-[0.5px] object-contain" alt="" src="Vector 3.svg" />
          					</div>
          					<img className="absolute top-[calc(50%_-_136px)] left-[calc(50%_-_104.83px)] w-[210px] h-[198.4px] object-cover" alt="" src="product page07.png" />
        				</div>
        				<div className="w-[296px] relative h-[358px]">
          					<div className="absolute top-[0px] left-[0px] w-[296px] h-[358px]">
            						<img className="absolute top-[0px] left-[1px] rounded-8xs w-[295px] h-[358px]" alt="" src="Rectangle 306.svg" />
            						<div className="absolute w-[64.86%] top-[77.37%] left-[9.46%] tracking-[-0.2px] leading-[24px] font-medium whitespace-pre-wrap inline-block">{`              tractor `}</div>
            						<img className="absolute top-[258px] left-[0px] rounded-8xs w-[295px] h-[0.5px] object-contain" alt="" src="Vector 3.svg" />
          					</div>
          					<img className="absolute top-[calc(50%_-_136px)] left-[calc(50%_-_104.66px)] w-[210px] h-[198.4px] object-cover" alt="" src="product page06.png" />
        				</div>
        				<div className="w-[296px] relative h-[358px]">
          					<div className="absolute top-[0px] left-[0px] w-[296px] h-[358px]">
            						<img className="absolute top-[0px] left-[1px] rounded-8xs w-[295px] h-[358px]" alt="" src="Rectangle 306.svg" />
            						<div className="absolute w-[64.86%] top-[77.37%] left-[9.46%] tracking-[-0.2px] leading-[24px] font-medium inline-block">
              							<p className="m-0">a grass cutting machine</p>
            						</div>
            						<img className="absolute top-[258px] left-[0px] rounded-8xs w-[295px] h-[0.5px] object-contain" alt="" src="Vector 3.svg" />
          					</div>
          					<img className="absolute top-[calc(50%_-_136px)] left-[calc(50%_-_105px)] w-[210px] h-[198.4px] object-cover" alt="" src="product page08.png" />
        				</div>
      			</div>
      			<div className="absolute top-[222px] left-[101px] flex flex-row flex-wrap items-start justify-start gap-[18px]">
        				<div className="w-[296px] relative h-[358px]">
          					<div className="absolute top-[0px] left-[0px] w-[296px] h-[358px] cursor-pointer" onClick={onProductGContainerClick}>
            						<img className="absolute top-[0px] left-[1px] rounded-8xs w-[295px] h-[358px]" alt="" src="Rectangle 306.svg" />
            						<div className="absolute w-[64.86%] top-[77.37%] left-[9.46%] tracking-[-0.2px] leading-[24px] font-medium inline-block">Men Long Sleeve</div>
            						<img className="absolute top-[258px] left-[0px] rounded-8xs w-[295px] h-[0.5px] object-contain" alt="" src="Vector 3.svg" />
          					</div>
          					<img className="absolute top-[22px] left-[28px] w-[241px] h-[198px] object-cover" alt="" src="product page 01.png" />
        				</div>
        				<div className="w-[296px] relative h-[358px]">
          					<div className="absolute top-[0px] left-[0px] w-[296px] h-[358px]">
            						<img className="absolute top-[0px] left-[1px] rounded-8xs w-[295px] h-[358px]" alt="" src="Rectangle 306.svg" />
            						<div className="absolute w-[64.86%] top-[77.37%] left-[9.46%] tracking-[-0.2px] leading-[24px] font-medium inline-block">{`Polished seeds Bowl 250Ml `}</div>
            						<img className="absolute top-[258px] left-[0px] rounded-8xs w-[295px] h-[0.5px] object-contain" alt="" src="Vector 3.svg" />
          					</div>
          					<img className="absolute top-[calc(50%_-_157px)] left-[calc(50%_-_105px)] w-[210px] h-[198.4px] object-cover" alt="" src="product page 04.png" />
        				</div>
        				<div className="w-[296px] relative h-[358px]">
          					<div className="absolute top-[0px] left-[0px] w-[296px] h-[358px]">
            						<img className="absolute top-[0px] left-[1px] rounded-8xs w-[295px] h-[358px]" alt="" src="Rectangle 306.svg" />
            						<div className="absolute w-[64.86%] top-[77.37%] left-[9.46%] tracking-[-0.2px] leading-[24px] font-medium inline-block">
              							<p className="m-0">{`a cofee machine `}</p>
            						</div>
            						<img className="absolute top-[258px] left-[0px] rounded-8xs w-[295px] h-[0.5px] object-contain" alt="" src="Vector 3.svg" />
          					</div>
          					<img className="absolute top-[calc(50%_-_157px)] left-[calc(50%_-_105.66px)] w-[210px] h-[198.4px] object-cover" alt="" src="product page 03.png" />
          					<div className="absolute top-[-41px] left-[156px] shadow-[0px_2px_4px_rgba(25,_33,_61,_0.08)] rounded-cards-small bg-dropdowns-backgrounds-bg-color-1 flex flex-col items-start justify-start p-2 gap-[2px] text-xs text-titles-paragraphs-text-neutral border-[1px] border-solid border-dropdowns-borders-br-color-1">
            						<div className="self-stretch rounded-dropdowns-default bg-dropdowns-backgrounds-bg-color-1 overflow-hidden flex flex-row items-center justify-start p-2">
              							<div className="flex flex-row items-start justify-start">
                								<div className="flex flex-row items-center justify-start">
                  									<div className="relative leading-[130%]">Electronics</div>
                								</div>
              							</div>
            						</div>
            						<div className="self-stretch rounded-dropdowns-default bg-dropdowns-backgrounds-bg-color-1 overflow-hidden flex flex-row items-center justify-start p-2">
              							<div className="flex flex-row items-start justify-start">
                								<div className="flex flex-row items-center justify-start">
                  									<div className="relative leading-[130%]">Gifts</div>
                								</div>
              							</div>
            						</div>
            						<div className="self-stretch rounded-dropdowns-default bg-dropdowns-backgrounds-bg-color-1 overflow-hidden flex flex-row items-center justify-start p-2">
              							<div className="flex flex-row items-start justify-start">
                								<div className="flex flex-row items-center justify-start">
                  									<div className="relative leading-[130%]">Farmer’s</div>
                								</div>
              							</div>
            						</div>
            						<div className="self-stretch rounded-dropdowns-default bg-dropdowns-backgrounds-bg-color-1 overflow-hidden flex flex-row items-center justify-start p-2">
              							<div className="flex flex-row items-start justify-start">
                								<div className="flex flex-row items-center justify-start">
                  									<div className="relative leading-[130%]">Agriculture</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className="w-[296px] relative h-[358px]">
          					<div className="absolute top-[0px] left-[0px] w-[296px] h-[358px]">
            						<img className="absolute top-[0px] left-[1px] rounded-8xs w-[295px] h-[358px]" alt="" src="Rectangle 306.svg" />
            						<div className="absolute w-[64.86%] top-[77.37%] left-[9.46%] tracking-[-0.2px] leading-[24px] font-medium inline-block">{`a rare flower plant `}</div>
            						<img className="absolute top-[258px] left-[0px] rounded-8xs w-[295px] h-[0.5px] object-contain" alt="" src="Vector 3.svg" />
          					</div>
          					<img className="absolute top-[calc(50%_-_157px)] left-[calc(50%_-_105px)] w-[210px] h-[198.4px] object-cover" alt="" src="product page 02.png" />
        				</div>
      			</div>
    		</div>);
};

export default ProductList;
