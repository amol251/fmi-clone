import React from 'react'
import RoundedCornerBtn from './Shared/RoundedCornerBtn'
import AnchorWithIcon from './Shared/AnchorWithIcon'
import Images from '../constants/Images'

const readOnData = [
    {
        title: 'Pet Food Makers Think Beyond Animal Meat',
        link: 'https://time.com/6253164/pet-food-plant-based-animal-meat/',
        icon: 'readon1'
    },
    {
        title: 'Five Key Trends To Look Out For In The Hospitality Industry In 2023',
        link: 'https://www.entrepreneur.com/en-ae/growth-strategies/five-key-trends-to-look-out-for-in-the-hospitality-industry/444699',
        icon: 'readon2'
    },
    {
        title: 'Would you spend over £10 on a tin of Cornish fish?',
        link: 'https://www.telegraph.co.uk/food-and-drink/features/best-british-luxury-tinned-fish-taste-test-mitch-tonks-ortiz/',
        icon: 'readon3'
    },
    {
        title: 'Eyeing Rs 120 Crore Revenue in 3 Years, Mi Arcus Mulls Debuting Pre-Owned Kidswear Category',
        link: 'https://business.outlookindia.com/companies/eyeing-rs-120-crore-revenue-in-3-years-mi-arcus-mulls-debuting-pre-owned-kidswear-category',
        icon: 'readon4'
    },
    {
        title: '9 best countertop dishwashers for 2023',
        link: 'https://www.nbcnews.com/select/shopping/best-countertop-dishwashers-small-kitchen-ncna1302640',
        icon: 'readon5'
    },
    {
        title: "Malaysia's Pet World Nutritions eyes Singapore IPO as early as end-2023",
        link: 'https://www.reuters.com/markets/asia/malaysias-pet-world-nutritions-eyes-singapore-ipo-early-end-2023-2023-02-23/',
        icon: 'readon6'
    },
    {
        title: 'Why Anti-Malware And Antivirus Ran Out Of Gas',
        link: 'https://www.forbes.com/sites/forbestechcouncil/2023/02/24/why-anti-malware-and-antivirus-ran-out-of-gas/?sh=65c5a52c3dd7',
        icon: 'readon7'
    },
    {
        title: 'Key Observability Trends of 2023',
        link: 'https://ciosea.economictimes.indiatimes.com/news/cloud-computing/key-observability-trends-of-2023/98078910',
        icon: 'readon8'
    }]

export default function AboutUs() {
    return (
        <section class="about_us_section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                        <div class="section_title_div text-center">
                            <h4 class="section_title mb-3">Our Business is to Grow Yours.</h4>
                            <p class="mb-4">Join 500+ expert analysts to supercharge your growth</p>
                        </div>
                        <div class="about_us_Btn_div text-center">
                            <RoundedCornerBtn classname="about_us_Btn" label="About Future Market Insights" link="https://www.futuremarketinsights.com/about-us" />
                        </div>
                    </div>
                </div>
                <div class="row pt-5">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="event_div bg-grey4 p-4 mb-3 radius15 d-flex flex-sm-row flex-column justify-content-between align-items-center">
                            <div class="event_content_div pe-4">
                                <h5 class="font24 t-blue1">Events</h5>
                                <p class="t-black4 font15">Is the Nutraceuticals Industry gaining Renewed Immunity with Sustainability?</p>
                                <RoundedCornerBtn classname="d-inline-block mb-3" label="View Events" link="https://event.futuremarketinsights.com/is-the-nutraceuticals-industry-gaining-renewed-immunity-with-sustainability" />
                            </div>
                            <div class="event_video ps-4">
                                <a class="eventImg" href="https://event.futuremarketinsights.com/is-the-nutraceuticals-industry-gaining-renewed-immunity-with-sustainability" title="Is the Nutraceuticals Industry gaining Renewed Immunity with Sustainability?">
                                    <img src={Images.FoodVita} class="radius6" alt="Is the Nutraceuticals Industry gaining Renewed Immunity with Sustainability?" title="Is the Nutraceuticals Industry gaining Renewed Immunity with Sustainability?" loading="lazy" width="144" height="98" />
                                </a>
                            </div>
                        </div>
                        <div class="certificate_div bg-grey4 p-5 mb-3 radius15">
                            <div class="certificate_content_div radius15 mx-4">
                                <p class="certificate_title t-black1 text-center bg-blue1 radiustopCorners15 mb-0 py-1">Certified Member</p>
                                <div class="certificate_img text-center p-4">
                                    <img src={Images.ESOMRCorporate} class="" alt="FMI - An Esomar Certified Company" title="FMI - An Esomar Certified Company" width="180" height="53" loading="lazy" />
                                    <p class="font10 mb-0 text-end t-black5">*<em>Esomar</em> is a business community of insights and analytics.</p>
                                </div>
                                <div class="certificate_ribbon radius8 text-center pt-1 px-2">
                                    <img src={Images.CertifiedIcon} class="" alt="FMI - An Esomar Certified Company" title="FMI - An Esomar Certified Company" width="46" height="63" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="read_on_div p-4 radius10">
                            <p class="read_on_para m-0 d-inline-block px-3">Read on</p>
                            <div class="read_on_news">
                                {
                                    readOnData.map(readOn => (
                                        <AnchorWithIcon link={readOn.link} iconClass={readOn.icon} label={readOn.title} />
                                    ))
                                }
                            </div>
                        </div>
                        <div class="recognized_member_div d-flex flex-sm-row flex-column justify-content-between">
                            <div class="recognized_div p-4 me-3 radius10 w-75">
                                <p class="recognized_para m-0 d-inline-block px-3">Recognized by</p>
                                <span class="newsIcon clutchIcon"></span>
                            </div>
                            <div class="member_div p-4 radius10 w-75 ms-3">
                                <p class="member_para m-0 d-inline-block px-3">Member of</p>
                                <span class="newsIcon memberIcon"></span>
                            </div>
                        </div>
                        <div class="stevie_award_div flex-sm-row flex-column px-4 py-2 mb-0 radius10">
                            <div class="award_logo">
                                <img src={Images.StevieAward} alt="Asia Pacific Stevie Award" title="FMI - Asia Pacific Stevie Award" width="100" height="100" loading="lazy" />
                            </div>
                            <div class="award_content">
                                <h6 class="p1 font18 bold500 t-black1 mb-2">2023 ASIA - PACIFIC STEVIE AWARDS</h6>
                                <p class="p2 font14 bold400 t-black1 mb-0">Recognized for the Category:</p>
                                <p class="p3 font14 bold500 mb-0">
                                    Thought Leadership Campaign of the Year
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-12">
                        <div class="stevie_award_div flex-sm-row flex-column justify-content-center px-4 py-2 mt-4 mb-0 radius10">
                            <div class="award_logo">
                                <img src={Images.BronzeAward} alt="BRONZE STEVIE®  in the 20th annual IBAs" title="FMI - BRONZE STEVIE®  in the 20th annual IBAs" width="80" height="160" loading="lazy" />
                            </div>
                            <div class="award_content">
                                <h6 class="p1 font18 bold500 t-black1 mb-2">Future Market Insights wins BRONZE STEVIE®  in the 20th annual IBAs.</h6>
                                <p class="p2 font14 bold400 t-black1 mb-0">Recognized for:</p>
                                <p class="p3 t-blue1 font14 bold500 mb-0">Thought Leadership in Sustainable Packaging</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}