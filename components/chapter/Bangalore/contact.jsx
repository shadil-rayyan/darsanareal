import Phone from "../public/chapter/Phone.svg"
import Email from "../public/chapter/Email.svg"
import Pin from "../public/chapter/Pin.svg"

const Contact = () => {
    return (
          <div className="relative w-full flex flex-row flex-wrap items-start justify-start gap-[48px] text-left text-13xl text-black font-text-regular-link">
                <div className="w-[300px] relative h-[162px]">
                      <img className="absolute top-[0px] left-[0px] w-12 h-12 overflow-hidden" alt="" src="Email.svg" />
                      <div className="absolute top-[72px] left-[0px] w-[300px] flex flex-col items-start justify-start gap-[24px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                                  <b className="self-stretch relative leading-[130%]">Email</b>
                                  <div className="w-[405.3px] relative text-base leading-[150%] hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</div>
                            </div>
                            <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">hello@relume.io</div>
                      </div>
                </div>
                <div className="w-[300px] flex flex-col items-start justify-start gap-[24px]">
                      <img className="w-12 relative h-12 overflow-hidden shrink-0" alt="" src="Phone.svg" />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                                  <b className="self-stretch relative leading-[130%]">Phone</b>
                                  <div className="w-[405.3px] relative text-base leading-[150%] hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</div>
                            </div>
                            <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">+1 (555) 000-0000</div>
                      </div>
                </div>
                <div className="w-[300px] flex flex-col items-start justify-start gap-[24px]">
                      <img className="w-12 relative h-12 overflow-hidden shrink-0" alt="" src="Pin.svg" />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                                  <b className="self-stretch relative leading-[130%]">Bangalore</b>
                                  <div className="w-[405.3px] relative text-base leading-[150%] hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</div>
                            </div>
                            <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">123 Sample St, Sydney NSW 2000 AU</div>
                      </div>
                </div>
          </div>);
};

export default Contact;
