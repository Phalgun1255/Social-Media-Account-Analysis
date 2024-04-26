// Define user data

const userData = {
 
  user1: {
    instagram: {
        followers: { value: 5000, today: 150, percentage: 3 },
        likes: { value: 200, today: 20, percentage: 10 },
        shares: { value: 50, today: -5, percentage: -10 },
        posts: { value: 30, today: 5, percentage: 20 },
        comments: { value: 100, today: 10, percentage: 10 },
    },
    linkedin: {
        posts: { value: 15, today: 2, percentage: 15 },
        network: { value: 300, today: 20, percentage: 7 },
        followers: { value: 1000, today: 50, percentage: 5 },
        profileviewers: { value: 200, today: 10, percentage: 5 },
    },
    twitter: {
        followers: { value: 1500, today: 30, percentage: 2 },
        likes: { value: 100, today: 5, percentage: 5 },
        retweets: { value: 20, today: 3, percentage: 15 },
        bookmarks: { value: 10, today: -2, percentage: -20 },
        comments: { value: 50, today: 8, percentage: 20 },
    },
    youtube: {
        followers: { value: 2000, today: 100, percentage: 5 },
        likes: { value: 300, today: 30, percentage: 10 },
        comments: { value: 100, today: 15, percentage: 15 },
        views: { value: 15000, today: 800, percentage: 5.63 },
    },
},
user2: {
    instagram: {
        followers: { value: 10000, today: 400, percentage: 4 },
        likes: { value: 400, today: 40, percentage: 11.11 },
        shares: { value: 100, today: -10, percentage: -9.09 },
        posts: { value: 50, today: 10, percentage: 25 },
        comments: { value: 200, today: 20, percentage: 11.11 },
    },
    linkedin: {
        posts: { value: 20, today: 5, percentage: 33.33 },
        network: { value: 500, today: 50, percentage: 11.11 },
        followers: { value: 2000, today: 100, percentage: 5 },
        profileviewers: { value: 400, today: 20, percentage: 5.26 },
    },
    twitter: {
        followers: { value: 2000, today: 50, percentage: 2.56 },
        likes: { value: 150, today: 15, percentage: 11.11 },
        retweets: { value: 40, today: 5, percentage: 14.29 },
        bookmarks: { value: 20, today: 5, percentage: 33.33 },
        comments: { value: 100, today: 10, percentage: 11.11 },
    },
    youtube: {
        followers: { value: 3000, today: 150, percentage: 5.26 },
        likes: { value: 500, today: 50, percentage: 11.11 },
        comments: { value: 200, today: 25, percentage: 14.29 },
        views: { value: 20000, today: 1200, percentage: 6.38 },
    },
},
user3: {
    instagram: {
        followers: { value: 8000, today: 300, percentage: 3.85 },
        likes: { value: 300, today: 30, percentage: 11.11 },
        shares: { value: 80, today: -10, percentage: -11.11 },
        posts: { value: 40, today: 8, percentage: 25 },
        comments: { value: 150, today: 20, percentage: 15.38 },
    },
    linkedin: {
        posts: { value: 25, today: 5, percentage: 25 },
        network: { value: 400, today: 40, percentage: 11.11 },
        followers: { value: 1500, today: 75, percentage: 5.26 },
        profileviewers: { value: 300, today: 15, percentage: 5.26 },
    },
    twitter: {
        followers: { value: 1800, today: 45, percentage: 2.56 },
        likes: { value: 120, today: 12, percentage: 11.11 },
        retweets: { value: 25, today: 3, percentage: 13.64 },
        bookmarks: { value: 15, today: -5, percentage: -25 },
        comments: { value: 70, today: 7, percentage: 11.11 },
        
    },
    youtube: {
      followers: { value: 2500, today: 100, percentage: 4.17 },
      likes: { value: 400, today: 40, percentage: 11.11 },
      comments: { value: 150, today: 20, percentage: 15.38 },
      views: { value: 18000, today: 1000, percentage: 5.88 },
  },
},
  // Add data for other users
};


// Function to generate HTML for social media card
function generateSocialMediaCard(username) {
  let html = '';

 
      const platformData = userData[username];
      let totalFollowers = 0;
    console.log(platformData)
    Object.keys(platformData).forEach(platform => {
      
      // Check if the platform has a followers property
      if (platformData[platform].followers.value) {
          // Add the followers value to the totalFollowers count
          totalFollowers += platformData[platform].followers.value;
      }
  });
    
    // html += `
    //   // <div class="card ${platform.toLowerCase()}">
    //   //     <div class="card-header">
    //   //         <img src="images/icon-${platform.toLowerCase()}.svg" alt="${platform.toLowerCase()}-icon">
    //   //         <p>@${user}</p>
    //   //     </div>
    //   //     <div class="card-body">
    //   //         <h1>${platformData["followers"]}</h1>
    //   //         <p>followers</p>
    //   //         <h1>${platformData["likes"]}</h1>
    //   //         <p>likes</p>
    //   //         ${platformData["Shares"] ? `<h1>${platformData["Shares"]}</h1><p>Shares</p>` : ''}
    //   //         ${platformData["Posts"] ? `<h1>${platformData["Posts"]}</h1><p>Posts</p>` : ''}
    //   //     </div>
    //   // </div>
    // `;
    html += `
  
       <h3 class="name">USER: ${username}</h3>
    <h3 class="total">Total Followers: ${totalFollowers}</h3>
          <section class="card-section">
            <div class="card linkedin">
              <div class="card-header">
                <img src="images/icon-facebook.svg" alt="linkedin-icon" />
                <p>@${username}</p>
              </div>
              <div class="card-body">
                <h1>${platformData.linkedin.followers.value}</h1>
                <p>Followers</p>
              </div>
              <div class="card-footer">
                <img src="images/icon-up.svg" alt="up-icon" />
                <p>${platformData.linkedin.followers.today} Today</p>
              </div>
            </div>
    
            <div class="card twitter">
              <div class="card-header">
                <img src="images/icon-twitter.svg" alt="twitter-icon" />
                <p>@${username}</p>
              </div>
              <div class="card-body">
                <h1>${platformData.twitter.followers.value}</h1>
                <p>Followers</p>
              </div>
              <div class="card-footer">
                <img src="images/icon-up.svg" alt="up-icon" />
                <p>${platformData.twitter.followers.today} today</p>
              </div>
            </div>
    
            <div class="card instagram">
              <div class="card-header">
                <img src="images/icon-instagram.svg" alt="instagram-icon" />
                <p>@${username}</p>
              </div>
              <div class="card-body">
                <h1>${platformData.instagram.followers.value}</h1>
                <p>Followers</p>
              </div>
              <div class="card-footer">
                <img src="images/icon-up.svg" alt="up-icon" />
                <p>${platformData.instagram.followers.today} today</p>
              </div>
            </div>
    
            <div class="card youtube">
              <div class="card-header">
                <img src="images/icon-youtube.svg" alt="youtube-icon" />
                <p>@${username}</p>
              </div>
              <div class="card-body">
                <h1>${platformData.youtube.followers.value}</h1>
                <p>followers</p>
              </div>
              <div class="card-footer">
                <img src="images/icon-down.svg" alt="down-icon" />
                <p>${platformData.youtube.followers.today} today</p>
              </div>
            </div>
          </section>
    
          <section class="overview-section">
            <h2 class="overview-title">overview - today</h2>
    
            <div class="overview-card">
              <h3 class="page-views">Page views</h3>
              <img class="linkedin-icon" src="images/icon-facebook.svg" alt="linkedin-icon" />
              <h2>${platformData.linkedin.profileviewers.value}</h2>
              <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
              <p class="percentage linkedin-up">${platformData.linkedin.profileviewers.percentage}%</p>
            </div>
            <div class="overview-card">
            <h3 class="page-views">Network</h3>
            <img class="linkedin-icon" src="images/icon-facebook.svg" alt="linkedin-icon" />
            <h2>${platformData.linkedin.network.value}</h2>
            <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
            <p class="percentage linkedin-up">${platformData.linkedin.network.percentage}%</p>
          </div>
          <div class="overview-card">
          <h3 class="page-views">Posts</h3>
          <img class="linkedin-icon" src="images/icon-facebook.svg" alt="linkedin-icon" />
          <h2>${platformData.linkedin.posts.value}</h2>
          <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
          <p class="percentage linkedin-up">${platformData.linkedin.posts.percentage}%</p>
        </div>
    
            <div class="overview-card">
              <h3 class="page-views">Followers</h3>
              <img class="linkedin-icon" src="images/icon-facebook.svg" alt="linkedin-icon" />
              <h2>${platformData.linkedin.followers.value}</h2>
              <img class="up-down-icon" src="images/icon-down.svg" alt="up" />
              <p class="percentage linkedin-down">${platformData.linkedin.followers.percentage}%</p>
            </div>
    
            <div class="overview-card">
              <h3 class="page-views">likes</h3>
              <img class="linkedin-icon" src="images/icon-instagram.svg" alt="instagram-icon" />
              <h2>${platformData.instagram.likes.value}</h2>
              <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
              <p class="percentage instagram-up">${platformData.instagram.likes.percentage}%</p>
            </div>
    
            <div class="overview-card">
              <h3 class="page-views">Posts</h3>
              <img class="linkedin-icon" src="images/icon-instagram.svg" alt="instagram-icon" />
              <h2>${platformData.instagram.posts.value}</h2>
              <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
              <p class="percentage instagram-up">${platformData.instagram.posts.percentage}%</p>
            </div>
            <div class="overview-card">
              <h3 class="page-views">Followers</h3>
              <img class="linkedin-icon" src="images/icon-instagram.svg" alt="instagram-icon" />
              <h2>${platformData.instagram.shares.value}</h2>
              <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
              <p class="percentage instagram-up">${platformData.instagram.shares.percentage}%</p>
            </div>
            <div class="overview-card">
              <h3 class="page-views">Comments</h3>
              <img class="linkedin-icon" src="images/icon-instagram.svg" alt="instagram-icon" />
              <h2>${platformData.instagram.comments.value}</h2>
              <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
              <p class="percentage instagram-up">${platformData.instagram.comments.percentage}%</p>
            </div>
    
            <div class="overview-card">
              <h3 class="page-views">Retweets</h3>
              <img class="linkedin-icon" src="images/icon-twitter.svg" alt="twitter-icon" />
              <h2>${platformData.twitter.retweets.value}</h2>
              <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
              <p class="percentage twitter-up">${platformData.twitter.retweets.percentage}</p>
            </div>
            <div class="overview-card">
            <h3 class="page-views">Followers</h3>
            <img class="linkedin-icon" src="images/icon-twitter.svg" alt="twitter-icon" />
            <h2>${platformData.twitter.followers.value}</h2>
            <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
            <p class="percentage twitter-up">${platformData.twitter.followers.percentage}</p>
          </div>
          <div class="overview-card">
          <h3 class="page-views">Comments</h3>
          <img class="linkedin-icon" src="images/icon-twitter.svg" alt="twitter-icon" />
          <h2>${platformData.twitter.comments.value}</h2>
          <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
          <p class="percentage twitter-up">${platformData.twitter.comments.percentage}</p>
        </div>
            <div class="overview-card">
              <h3 class="page-views">likes</h3>
              <img class="linkedin-icon" src="images/icon-twitter.svg" alt="twitter-icon" />
              <h2>${platformData.twitter.likes.value}</h2>
              <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
              <p class="percentage twitter-up">${platformData.twitter.likes.percentage}</p>
            </div>
    
            <div class="overview-card">
              <h3 class="page-views">likes</h3>
              <img class="linkedin-icon" src="images/icon-youtube.svg" alt="youtube-icon" />
              <h2>${platformData.youtube.likes.value}</h2>
              <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
              <p class="percentage youtube-up">${platformData.youtube.likes.percentage}</p>
            </div>
    
            <div class="overview-card">
              <h3 class="page-views">total views</h3>
              <img class="linkedin-icon" src="images/icon-youtube.svg" alt="tb-icon" />
              <h2>${platformData.youtube.views.value}</h2>
              <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
              <p class="percentage youtube-up">${platformData.youtube.views.percentage}%</p>
            </div>
            <div class="overview-card">
              <h3 class="page-views">Comments</h3>
              <img class="linkedin-icon" src="images/icon-youtube.svg" alt="tb-icon" />
              <h2>${platformData.youtube.comments.value}</h2>
              <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
              <p class="percentage youtube-up">${platformData.youtube.comments.percentage}%</p>
            </div>
            <div class="overview-card">
              <h3 class="page-views">followers</h3>
              <img class="linkedin-icon" src="images/icon-youtube.svg" alt="tb-icon" />
              <h2>${platformData.youtube.followers.value}</h2>
              <img class="up-down-icon" src="images/icon-up.svg" alt="up" />
              <p class="percentage youtube-up">${platformData.youtube.followers.percentage}%</p>
            </div>
          </section>
        
        
    `
  
  return html;
}
// Function to display social media information for a user
function displaySocialMediaInfo(username) {
  const dashboardContainer = document.querySelector('.data');



    console.log(username)
  
 
      const cardHTML = generateSocialMediaCard(username);
      dashboardContainer.innerHTML += cardHTML;

  
 
}

// Event listener for form submission to get username and display information
document.querySelector('#search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const username = document.querySelector('#search-input').value;
  displaySocialMediaInfo(username);
});
//
let checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

let trans = () => {
  console.log(document.documentElement);
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};