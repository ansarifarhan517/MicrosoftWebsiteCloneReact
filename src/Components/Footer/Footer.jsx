import React from 'react'

const Footer = () => {
    return (
        <div className="footer bg-[#f2f2f2] h-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
                <div className="fItems px-10 mt-10 ">
                    <h1 className="text-md text-[#616161] font-semibold mb-2">What's new</h1>
                    <ul className="c-list f-bare text-[#686868] space-y-2">
                        <li>
                            <a aria-label="Microsoft 365 What's new"
                                className="text-xs hover:underline hover:underline-offset-8 "
                                href="https://www.microsoft.com/microsoft-365">Microsoft 365</a>
                        </li>
                        <li>
                            <a aria-label="Surface Pro X What's new"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/surface/devices/surface-pro-x"
                                data-m="{&quot;cN&quot;:&quot;Whatsnew_SurfaceProX_nav&quot;,&quot;id&quot;:&quot;n2c1c1c1m1r1a2&quot;,&quot;sN&quot;:2,&quot;aN&quot;:&quot;c1c1c1m1r1a2&quot;}">Surface
                                Pro X</a>
                        </li>
                        <li>
                            <a aria-label="Surface Pro 7 What's new"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/surface/devices/surface-pro-7"
                                data-m="{&quot;cN&quot;:&quot;Whatsnew_SurfacePro7_nav&quot;,&quot;id&quot;:&quot;n3c1c1c1m1r1a2&quot;,&quot;sN&quot;:3,&quot;aN&quot;:&quot;c1c1c1m1r1a2&quot;}">Surface
                                Pro 7</a>
                        </li>
                        <li>
                            <a aria-label="Surface Laptop 3 What's new"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/surface/devices/surface-laptop-3"
                                data-m="{&quot;cN&quot;:&quot;Whatsnew_SurfaceLaptop3_nav&quot;,&quot;id&quot;:&quot;n4c1c1c1m1r1a2&quot;,&quot;sN&quot;:4,&quot;aN&quot;:&quot;c1c1c1m1r1a2&quot;}">Surface
                                Laptop 3</a>
                        </li>
                        <li>
                            <a aria-label="Windows 11 apps What's new"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/windows/windows-11-apps"
                                data-m="{&quot;cN&quot;:&quot;Footer_WhatsNew_Windows_11_apps_nav&quot;,&quot;id&quot;:&quot;n5c1c1c1m1r1a2&quot;,&quot;sN&quot;:5,&quot;aN&quot;:&quot;c1c1c1m1r1a2&quot;}">Windows
                                11 apps</a>
                        </li>

                    </ul>
                </div>
                <div className="fItems px-10 mt-10 ">
                    <h1 className="text-md text-[#616161] font-semibold mb-2">Microsoft Store</h1>
                    <ul className="text-[#686868] space-y-2">
                        <li>
                            <a className="text-xs hover:underline hover:underline-offset-8"
                                href="https://account.microsoft.com/">Account profile</a>
                        </li>
                        <li>
                            <a className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/download">Download Center</a>
                        </li>
                        <li>
                            <a className="text-xs hover:underline hover:underline-offset-8"
                                href="https://go.microsoft.com/fwlink/?linkid=2139749">Microsoft Store
                                Support</a>
                        </li>
                        <li>
                            <a className="text-xs hover:underline hover:underline-offset-8"
                                href="https://go.microsoft.com/fwlink/p/?LinkID=824764&amp;clcid=0x4009">Returns</a>
                        </li>
                        <li>
                            <a className="text-xs hover:underline hover:underline-offset-8"
                                href="https://account.microsoft.com/orders">Order tracking</a>
                        </li>


                    </ul>
                </div>
                <div className="fItems px-10 mt-10  ">
                    <h1 className="text-md text-[#616161] font-semibold mb-2">Education</h1>
                    <ul className=" text-[#686868] space-y-2">
                        <li>
                            <a aria-label="Microsoft in education Education"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/education">Microsoft in education</a>
                        </li>
                        <li>
                            <a aria-label="Devices for education Education"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/education/devices/overview">Devices for education</a>
                        </li>
                        <li>
                            <a aria-label="Microsoft Teams for Education Education"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/education/products/teams">Microsoft Teams for
                                Education</a>
                        </li>
                        <li>
                            <a aria-label="Microsoft 365 Education Education"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/education/buy-license/microsoft365">Microsoft 365
                                Education</a>
                        </li>
                        <li>
                            <a aria-label="Office Education Education"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/education/products/office">Office Education</a>
                        </li>
                        <li>
                            <a aria-label="Educator training and development Education"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://education.microsoft.com/">Educator training and development</a>
                        </li>
                        <li>
                            <a aria-label="Deals for students and parents Education"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-us/store/b/education">Deals for students and parents</a>
                        </li>
                        <li>
                            <a aria-label="Azure for students Education"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://azure.microsoft.com/en-in/free/students/">Azure for students</a>
                        </li>


                    </ul>
                </div>
                <div className="fItems px-10 mt-10  ">
                    <h1 className="text-md text-[#616161] font-semibold mb-2">Buisness</h1>
                    <ul className="c-list f-bare text-[#686868] space-y-2">
                        <li>
                            <a aria-label="Microsoft Cloud Business"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/microsoft-cloud">Microsoft Cloud</a>
                        </li>
                        <li>
                            <a aria-label="Microsoft Security Business"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/security">Microsoft Security</a>
                        </li>
                        <li>
                            <a aria-label="Azure Business" className="text-xs hover:underline hover:underline-offset-8"
                                href="https://azure.microsoft.com/en-in/">Azure</a>
                        </li>
                        <li>
                            <a aria-label="Dynamics 365 Business" className="text-xs hover:underline hover:underline-offset-8"
                                href="https://dynamics.microsoft.com/en-in/">Dynamics 365</a>
                        </li>
                        <li>
                            <a aria-label="Microsoft 365 Business" className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/microsoft-365/business/">Microsoft 365</a>
                        </li>
                        <li>
                            <a aria-label="Microsoft Advertising Business"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://about.ads.microsoft.com/en-in">Microsoft Advertising</a>
                        </li>
                        <li>
                            <a aria-label="Microsoft Industry Business"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/industry">Microsoft Industry</a>
                        </li>
                        <li>
                            <a aria-label="Microsoft Teams Business"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software">Microsoft
                                Teams</a>
                        </li>


                    </ul>
                </div>
                <div className="fItems px-10 mt-10  ">
                    <h1 className="text-md text-[#616161] font-semibold mb-2">Developer & IT</h1>
                    <ul className="c-list f-bare text-[#686868] space-y-2">
                        <li>
                            <a aria-label="Developer Center Developer &amp; IT"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://developer.microsoft.com/en-in/">Developer Center</a>
                        </li>
                        <li>
                            <a aria-label="Documentation Developer &amp; IT"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://learn.microsoft.com/docs/">Documentation</a>
                        </li>
                        <li>
                            <a aria-label="Microsoft Learn Developer &amp; IT"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://learn.microsoft.com/">Microsoft Learn</a>
                        </li>
                        <li>
                            <a aria-label="Microsoft Tech Community Developer &amp; IT"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://techcommunity.microsoft.com/">Microsoft Tech Community</a>
                        </li>
                        <li>
                            <a aria-label="Azure Marketplace Developer &amp; IT"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://azuremarketplace.microsoft.com/en-in/">Azure Marketplace</a>
                        </li>
                        <li>
                            <a aria-label="AppSource Developer &amp; IT"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://appsource.microsoft.com/en-in/">AppSource</a>
                        </li>
                        <li>
                            <a aria-label="Microsoft Power Platform Developer &amp; IT"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://powerplatform.microsoft.com/en-in/">Microsoft Power Platform</a>
                        </li>
                        <li>
                            <a aria-label="Visual Studio Developer &amp; IT"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://visualstudio.microsoft.com/">Visual Studio</a>
                        </li>


                    </ul>
                </div>
                <div className="fItems px-10 mt-10  ">
                    <h1 className="text-md text-[#616161] font-semibold mb-2">Company</h1>
                    <ul className="c-list f-bare text-[#686868] space-y-2">
                        <li>
                            <a aria-label="Careers Company" className="text-xs hover:underline hover:underline-offset-8"
                                href="https://careers.microsoft.com/">Careers</a>
                        </li>
                        <li>
                            <a aria-label="About Microsoft Company" className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/about">About Microsoft</a>
                        </li>
                        <li>
                            <a aria-label="Company news Company" className="text-xs hover:underline hover:underline-offset-8"
                                href="https://news.microsoft.com/en-in">Company news</a>
                        </li>
                        <li>
                            <a aria-label="Privacy at Microsoft Company"
                                className="text-xs hover:underline hover:underline-offset-8"
                                href="https://privacy.microsoft.com/en-in">Privacy at Microsoft</a>
                        </li>
                        <li>
                            <a aria-label="Investors Company" className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/investor/default.aspx">Investors</a>
                        </li>
                        <li>
                            <a aria-label="Security Company" className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/security/default.aspx">Security</a>
                        </li>
                        <li>
                            <a aria-label="Sustainability Company" className="text-xs hover:underline hover:underline-offset-8"
                                href="https://www.microsoft.com/en-in/sustainability/">Sustainability</a>
                        </li>



                    </ul>
                </div>
            </div>

            <div className="lastPart flex flex-col px-10 mt-10 space-y-6 py-10 md:flex-row md:justify-between md:items-center">
                <p className="text-xs text-[#686868]"><span className="px-1"><i
                    className="fa-solid fa-earth-americas text-[#686868] text-lg"></i></span>
                    Englsh (India)</p>
                <div className="">
                    <ul className="text-xs text-[#616161] ">
                        <li className="hover:underline hover:underline-offset-8 inline pr-5 text-xs">
                            <a className="" href="https://support.microsoft.com/contactus">Contact
                                Microsoft</a>
                        </li>
                        <li className="hover:underline hover:underline-offset-8 inline pr-5 text-xs">
                            <a className="" href="https://go.microsoft.com/fwlink/?LinkId=521839">Privacy</a>
                        </li>
                        <li className="hover:underline hover:underline-offset-8 inline pr-5 text-xs">
                            <a className="" href="#">Manage
                                cookies</a>
                        </li>
                        <li className="hover:underline hover:underline-offset-8 inline pr-5 text-xs">
                            <a className="" href="https://go.microsoft.com/fwlink/?LinkID=206977">Terms
                                of use</a>
                        </li>
                        <li className="hover:underline hover:underline-offset-8  inline pr-5 text-xs ">
                            <a className="" href="https://go.microsoft.com/fwlink/?linkid=2196228">Trademarks</a>
                        </li>
                        <li className="hover:underline hover:underline-offset-8 inline pr-5 text-xs">
                            <a className="" href="https://choice.microsoft.com/">About
                                our ads</a>
                        </li>

                        <li className="hover:underline hover:underline-offset-8 text-xs inline">© Microsoft 2023</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer