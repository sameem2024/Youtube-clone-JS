
class videos{

    videolink;
    profilepic
    timestamp;
    profilelink;
    channelpic
    name;
    videoTitle;
    videoStats;

    constructor(videoDetails){
        this.videolink = videoDetails.videolink;
        this.profilepic = videoDetails.profilepic;
        this.timestamp = videoDetails.timestamp;
        this.profilelink = videoDetails.profilelink;
        this.channelpic = videoDetails.channelpic;
        this.name = videoDetails.name;
        this.videoTitle = videoDetails.videoTitle;
        this.videoStats = videoDetails.videoStats;
    }
    
};


let HTML = '';

const List = [{
    videolink:'https://www.youtube.com/watch?v=n2RNcPRtAiY',
    profilepic:'images/thumbnail-1.webp',
    timestamp:'14:20',
    profilelink:'https://www.youtube.com/c/mkbhd',
    channelpic:'images/channel-1.jpeg',
    name:'Marques Brownlee',
    videoTitle:'Talking Tech and AI with Google CEO Sundar Pichai!',
    videoStats:'3.4M views &#xB7; 6 months ago'
},
{
    videolink:'https://www.youtube.com/watch?v=mP0RAo9SKZk',
    profilepic:'images/thumbnail-2.webp',
    timestamp:'08:22',
    profilelink:'https://www.youtube.com/c/markiplier' ,
    channelpic:'images/channel-2.jpeg',
    name:'Markipillar',
    videoTitle:'Try Not to Laugh Challenge #9',
    videoStats:'19M views &#xB7; 4 years ago'
},
{
    videolink:'https://www.youtube.com/watch?v=FgjPQQeTh1w',
    profilepic:'images/thumbnail-3.webp',
    timestamp:'09:13',
    profilelink:'https://www.youtube.com/user/SSSniperWolf',
    channelpic:'images/channel-3.jpeg',
    name:'SSSniperWolf',
    videoTitle:'Crazy Tik Toks Taken Moments Before DISASTER',
    videoStats:'12M views &#xB7; 1 year ago'
},
{
    videolink:'https://www.youtube.com/watch?v=094y1Z2wpJg',
    profilepic:'images/thumbnail-4.webp',
    timestamp:'22:09',
    profilelink:'https://www.youtube.com/c/veritasium',
    channelpic:'images/channel-4.jpeg',
    name:'Veritasium',
    videoTitle:'The Simplest Math Problem No One Can Solve - collatz Conjecture',
    videoStats:'18M views &#xB7; 4 months ago'
},
{
    videolink:'https://www.youtube.com/watch?v=86CQq3pKSUw',
    profilepic:'images/thumbnail-5.webp',
    timestamp:'11:17',
    profilelink:'https://www.youtube.com/c/CSDojo',
    channelpic:'images/channel-5.jpeg',
    name:'CS Dojo',
    videoTitle:'Kadanes Algorithm to Maximum Sum Subarray Problem',
    videoStats:'517K views &#xB7; 5 years ago'
},
{
    videolink:'https://www.youtube.com/watch?v=yXWw0_UfSFg',
    profilepic:'images/thumbnail-6.webp',
    timestamp:'19:59',
    profilelink:'https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA',
    channelpic:'images/channel-6.jpeg',
    name:'MrBeast',
    videoTitle:'Anything You Can Fit in The Circle I"ll Pay For',
    videoStats:'141M views &#xB7; 1 year ago'
},
{
    videolink:'https://www.youtube.com/watch?v=fNVa1qMbF9Y',
    profilepic:'images/thumbnail-7.webp',
    timestamp:'10:13',
    profilelink:'https://www.youtube.com/channel/UCP5tjEmvPItGyLhmjdwP7Ww',
    channelpic:'images/channel-7.jpeg',
    name:"RealLifeLore",
    videoTitle:"Why Planes Don't Fly Over Tibet",
    videoStats:'6.6M views &#xB7; 1 year ago'
},
{
    videolink:'https://www.youtube.com/watch?v=lFm4EM1juls',
    profilepic:'images/thumbnail-8.webp',
    timestamp:'07:12',
    profilelink:'https://www.youtube.com/channel/UCHAK6CyegY22Zj2GWrcaIxg',
    channelpic:'images/channel-8.jpeg',
    name:"Tech Vision",
    videoTitle:"Inside The World's Biggest Passenger Plane",
    videoStats:'3.7M views &#xB7; 10 months ago'
},
{
    videolink:'https://www.youtube.com/watch?v=ixmxOlcrlUc',
    profilepic:'images/thumbnail-9.webp',
    timestamp:'13:17',
    profilelink:'https://www.youtube.com/c/OFFICIALTHENXSTUDIOS',
    channelpic:'images/channel-9.jpeg',
    name:"ThenX",
    videoTitle:"The SECRET to Super Human STRENGTH",
    videoStats:'20M views &#xB7; 3 years ago'
},
{
    videolink:'https://www.youtube.com/watch?v=R2vXbFp5C9o',
    profilepic:'images/thumbnail-10.webp',
    timestamp:'7:53',
    profilelink:'https://www.youtube.com/user/businessinsider',
    channelpic:'images/channel-10.jpeg',
    name:"Business Insider",
    videoTitle:"How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
    videoStats:'14M views &#xB7; 1 year ago'
},
{
    videolink:'https://www.youtube.com/watch?v=0nZuYyXET3s',
    profilepic:'images/thumbnail-11.webp',
    timestamp:'04:10',
    profilelink:'https://www.youtube.com/c/Destinationtips',
    channelpic:'images/channel-11.jpeg',
    name:"Destination Tips",
    videoTitle:"Dubai's Crazy Underwater Train and Other Things #Only in Dubai",
    videoStats:'3M views &#xB7; 1 year ago'
},
{
    videolink:'https://www.youtube.com/watch?v=9iMGFqMmUFs',
    profilepic:'images/thumbnail-12.webp',
    timestamp:'04:13',
    profilelink:'https://www.youtube.com/teded',
    channelpic:'images/channel-12.jpeg',
    name:"Ted-Ed",
    videoTitle:"What would happen if you didn't drink water? - Mia Nacamulli",
    videoStats:'12M views &#xB7; 5 years ago'
}].map((videoDetail)=>{
    return new videos(videoDetail);
    });

console.log(List);


List.forEach((video)=>{
    

HTML += `
    <div class="video-preview">
            <div class="profile-pic-row">
                <a href=${video.videolink} target="_blank">
                    <img class="profile-pic" src="/${video.profilepic}"/>
                </a>
                <div class="timestamp">${video.timestamp}</div>
            </div>

            <div class="video-info-grid">
                <div class="profile-pic-container">
                    <a href="${video.profilelink}"target="_blank">
                        <img class="channel-profile-pic" src="/${video.channelpic}"/>
                    </a>
                    <div class="channel-tooltip">

                        <img class="profile-pic-tooltip" src="/${video.channelpic}"/>

                        <div class="profile-info">
                            <div class="name">${video.name}</div>
                            <div class="subscriber-list">15M subscribers</div>
                        </div>
                    </div>

                </div>

                <div class="video-info">
                    <a href="${video.videolink}" target="_blank" class="video-title-link">
                        <p class="video-title">
                        ${video.videoTitle}
                        </p>
                    </a>
                    <a href="${video.profilelink}" target="_blank" class="video-title-link">
                        <p class="channel-name">
                        ${video.name}
                        </p>
                    </a>

                    <p class="video-stats">
                    ${video.videoStats}
                    </p>
                </div>
            </div>
        </div>`

  
});

 


document.querySelector('.js-video-grid').innerHTML = HTML;