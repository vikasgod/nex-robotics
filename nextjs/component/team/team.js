import React from 'react'

export default function Team() {
    const data = [
        {
          "id": 1,
          "name": "John Doe",
          "position": "Mechanical Engineer",
          "img" : "assets/images/member_1.jpg"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "position": "Senior Mechanical Designer",
          "img" : "assets/images/member_2.jpg"
        },
        {
          "id": 3,
          "name": "Robert Johnson",
          "position": "Mechanical Technician",
          "img" : "assets/images/member_3.jpg"
        },
        {
          "id": 4,
          "name": "Emily Davis",
          "position": "Quality Control Specialist",
          "img" : "assets/images/member_4.jpg"
        },
        {
          "id": 5,
          "name": "Michael Brown",
          "position": "Mechanical Drafter",
          "img": "assets/images/member_3.jpg"
        },
        {
          "id": 6,
          "name": "Olivia Taylor",
          "position": "Project Manager",
          "img": "assets/images/member_2.jpg"
        },
        {
          "id": 7,
          "name": "William White",
          "position": "Mechanical Inspector",
          "img": "assets/images/member_4.jpg"
        },
        {
            "id": 8,
            "name": "Merry Williams",
            "position": "Mechanical Engineer",
            "img" : "assets/images/member_1.jpg"
          },
      ]
  return (
    <>
        <div className="cs-page_heading cs-style1 cs-center text-center cs-bg overflow-hidden" style={{backgroundImage : "url(assets/images/team_hero_bg.jpg);"}}>
            <div className="container">
            <div className="cs-page_heading_in">
                <h1 className="cs-page_title cs-font_50 cs-white_color">Our Team</h1>
                <ol className="breadcrumb text-uppercase justify-content-center">
                    <li className="breadcrumb-items"><a href="index-2.html">Home</a></li>
                    <li className="breadcrumb-items active">Team</li>
                </ol>
            </div>
            </div>
        </div>    
        <div className="cs-height_145 cs-height_lg_80"></div>
        <section>
            <div className="container">
            <div className="cs-section_heading cs-style1 text-center">
                <h3 className="cs-section_subtitle">Our Team</h3>
                <h2 className="cs-section_title">Awesome team <br/>members</h2>
            </div>
            <div className="cs-height_90 cs-height_lg_45"></div>
            </div>
            <div className="container">
            <div className="row">
                {data.map((item,i)=>(
                    <div className="col-lg-3 col-sm-6">
                        <div className="cs-team cs-style1">
                            <div className="cs-member_thumb">
                            <img src={item.img} alt="Member"/>
                            <div className="cs-member_overlay"></div>
                            </div>
                            <div className="cs-member_info">
                            <h2 className="cs-member_name"><a href="team-details.html">{item.name}</a></h2>
                            <div className="cs-member_designation">{item.position}</div>
                            </div>
                            <div className="cs-member_social cs-primary_color">
                            <a href="#">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.39756 18.333H1.9422V7.20581H5.39756V18.333ZM3.66802 5.68795C2.56311 5.68795 1.6669 4.77277 1.6669 3.66786C1.6669 3.13714 1.87773 2.62814 2.25301 2.25286C2.6283 1.87758 3.13729 1.66675 3.66802 1.66675C4.19875 1.66675 4.70774 1.87758 5.08302 2.25286C5.4583 2.62814 5.66913 3.13714 5.66913 3.66786C5.66913 4.77277 4.77256 5.68795 3.66802 5.68795ZM18.3298 18.333H14.8819V12.9164C14.8819 11.6255 14.8559 9.96995 13.0854 9.96995C11.2889 9.96995 11.0136 11.3725 11.0136 12.8234V18.333H7.56199V7.20581H10.876V8.72367H10.9243C11.3857 7.84941 12.5125 6.92679 14.1937 6.92679C17.6907 6.92679 18.3336 9.22962 18.3336 12.2207V18.333H18.3298Z" fill="currentColor"></path>
                                </svg>                      
                            </a>
                            <a href="#">
                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6204 3.60521C15.631 3.75325 15.631 3.90133 15.631 4.04938C15.631 8.56502 12.194 13.7681 5.91227 13.7681C3.97697 13.7681 2.17918 13.2076 0.666901 12.2347C0.941869 12.2664 1.20623 12.277 1.49177 12.277C3.08862 12.277 4.55861 11.7377 5.73248 10.8176C4.23078 10.7859 2.97231 9.80236 2.53872 8.44871C2.75024 8.48042 2.96173 8.50158 3.18384 8.50158C3.49051 8.50158 3.79722 8.45926 4.08273 8.38527C2.51759 8.06798 1.34369 6.69321 1.34369 5.03288V4.99059C1.79842 5.2444 2.32723 5.40303 2.88768 5.42416C1.96762 4.81078 1.36485 3.76383 1.36485 2.57939C1.36485 1.94488 1.53403 1.36324 1.83015 0.855618C3.51164 2.92838 6.03915 4.282 8.87331 4.43008C8.82045 4.17627 8.78871 3.91191 8.78871 3.64752C8.78871 1.76509 10.3116 0.231689 12.2045 0.231689C13.188 0.231689 14.0764 0.644126 14.7003 1.31037C15.4723 1.16232 16.2126 0.876777 16.8683 0.485499C16.6144 1.27867 16.0751 1.94491 15.3666 2.3679C16.054 2.2939 16.7202 2.10351 17.3336 1.83915C16.8683 2.51594 16.2867 3.11871 15.6204 3.60521V3.60521Z" fill="currentColor"></path>
                                </svg>                                          
                            </a>
                            <a href="#">
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9853 1.97421C16.7936 1.25247 16.2289 0.684051 15.5118 0.491149C14.212 0.140625 9.00023 0.140625 9.00023 0.140625C9.00023 0.140625 3.78845 0.140625 2.48868 0.491149C1.7716 0.684081 1.20685 1.25247 1.01517 1.97421C0.666901 3.28241 0.666901 6.01183 0.666901 6.01183C0.666901 6.01183 0.666901 8.74126 1.01517 10.0495C1.20685 10.7712 1.7716 11.3159 2.48868 11.5088C3.78845 11.8594 9.00023 11.8594 9.00023 11.8594C9.00023 11.8594 14.212 11.8594 15.5118 11.5088C16.2289 11.3159 16.7936 10.7712 16.9853 10.0495C17.3336 8.74126 17.3336 6.01183 17.3336 6.01183C17.3336 6.01183 17.3336 3.28241 16.9853 1.97421ZM7.29568 8.48995V3.53372L11.6517 6.01189L7.29568 8.48995Z" fill="currentColor"></path>
                                </svg>                      
                            </a>
                            <a href="#">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16839 11.1987C4.16839 12.1623 3.38119 12.9495 2.41764 12.9495C1.4541 12.9495 0.666901 12.1623 0.666901 11.1987C0.666901 10.2352 1.4541 9.448 2.41764 9.448H4.16839V11.1987ZM5.05083 11.1987C5.05083 10.2352 5.83803 9.448 6.80157 9.448C7.76511 9.448 8.55232 10.2352 8.55232 11.1987V15.5827C8.55232 16.5462 7.76511 17.3334 6.80157 17.3334C5.83803 17.3334 5.05083 16.5462 5.05083 15.5827V11.1987ZM6.80157 4.16824C5.83803 4.16824 5.05083 3.38103 5.05083 2.41749C5.05083 1.45395 5.83803 0.666748 6.80157 0.666748C7.76511 0.666748 8.55232 1.45395 8.55232 2.41749V4.16824H6.80157ZM6.80157 5.05068C7.76511 5.05068 8.55232 5.83788 8.55232 6.80142C8.55232 7.76496 7.76511 8.55217 6.80157 8.55217H2.41764C1.4541 8.55217 0.666901 7.76496 0.666901 6.80142C0.666901 5.83788 1.4541 5.05068 2.41764 5.05068H6.80157ZM13.8321 6.80142C13.8321 5.83788 14.6193 5.05068 15.5828 5.05068C16.5464 5.05068 17.3336 5.83788 17.3336 6.80142C17.3336 7.76496 16.5464 8.55217 15.5828 8.55217H13.8321V6.80142ZM12.9496 6.80142C12.9496 7.76496 12.1624 8.55217 11.1989 8.55217C10.2354 8.55217 9.44815 7.76496 9.44815 6.80142V2.41749C9.44815 1.45395 10.2354 0.666748 11.1989 0.666748C12.1624 0.666748 12.9496 1.45395 12.9496 2.41749V6.80142ZM11.1989 13.8319C12.1624 13.8319 12.9496 14.6191 12.9496 15.5827C12.9496 16.5462 12.1624 17.3334 11.1989 17.3334C10.2354 17.3334 9.44815 16.5462 9.44815 15.5827V13.8319H11.1989ZM11.1989 12.9495C10.2354 12.9495 9.44815 12.1623 9.44815 11.1987C9.44815 10.2352 10.2354 9.448 11.1989 9.448H15.5828C16.5464 9.448 17.3336 10.2352 17.3336 11.1987C17.3336 12.1623 16.5464 12.9495 15.5828 12.9495H11.1989Z" fill="currentColor"></path>
                                </svg>                      
                            </a>
                            </div>
                        </div>
                        <div className="cs-height_80 cs-height_lg_30"></div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    </>
  )
}
