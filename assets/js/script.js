        // Your API response (in a real-world scenario, you would fetch this from a server)
        const apiData = [{
                "id": 1,
                "photo": "https://github.com/Asibul07/responsive-blog-site/blob/main/assets/img/01.jpg",
                "category": "✍️ Article",
                "title": "What if famous brands had regular fonts? Meet RegulaBrands!",
                "details": "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
                "date": " ",
                "location": " ",
                "btn": "",
                "author": {
                    "name": "Sarthak Kamra",
                    "photo": ""
                },
                "menuOptions": ["edit", "report"],
                "views": "1.4k views"
            },
            {
                "id": 2,
                "photo": "https://github.com/Asibul07/responsive-blog-site/blob/main/assets/img/02.jpg",
                "category": "🔬️ Education",
                "title": "Tax Benefits for Investment under National Pension Scheme launched by Government",
                "details": "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
                "date": " ",
                "location": " ",
                "btn": "",
                "author": {
                    "name": "Sarah West",
                    "photo": ""


                },
                "menuOptions": ["edit", "report"],
                "views": "1.4k views"
            },
            {
                "id": 3,
                "photo": "https://github.com/Asibul07/responsive-blog-site/blob/main/assets/img/03.jpg",

                "category": "🗓️ Meetup",
                "title": "Finance & Investment Elite Social Mixer @Lujiazui",
                "date": "📅Fri, 12 Oct, 2018",
                "location": "📍Ahmedabad, India",
                "details": "",
                "btn": "Visit Website",
                "author": {
                    "name": "Jane Smith",
                    "photo": ""


                },
                "menuOptions": ["edit", "report"],
                "views": "1.5k views"
            },
            {
                "id": 4,
                "photo": "https://github.com/Asibul07/responsive-blog-site/blob/main/assets/img/04.jpg",
                "category": "💼️ Job",
                "title": "Software Developer",
                "date": "💻 Innovaccer Analytics Private Ltd.",
                "location": "📍Noida, India",
                "details": "",
                "btn": "Apply on Timesjobs",
                "author": {
                    "name": "Joseph Gray",
                    "photo": ""


                },
                "menuOptions": ["edit", "report"],
                "views": "1.5k views"
            },

            // Repeat same for more
        ];

        cardContainer
        // Function to generate HTML for each card
        function generateCard(cardData) {
            return `
                <div class="card mb-4">
                    ${cardData.photo ? `<img src="${cardData.photo}" class="card-img-top" alt="Card Image" height="220">` : ''}
                    <div class="card-body">
                    <span class="badge text-dark">${cardData.category}</span>
                    <div class="d-flex flex-row align-items-center justify-content-between">
                        <h5 class="card-title pt-3">
                            <a href="#" class="text-decoration-none text-dark link-underline-opacity-50-hover">${cardData.title}</a>
                        </h5>
                        <div class="position-relative">
                            <i class="fas fa-ellipsis-v btn position-absolute end-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                            <div class="dropdown-menu">
                                ${cardData.menuOptions.map(option => `<a class="dropdown-item" href="#">${option}</a>`).join('')}
                            </div>
                        </div>
                    </div>
                
                    <div class="d-flex flex-row mt-3">
                    <div class="flex-grow-1">
                        <p class="card-text">${cardData.details} ${cardData.date}</p>
                    </div>
                    <div>
                        <p class="card-text">${cardData.location}</p>
                    </div>
                </div>
                
                    </div>
                    ${cardData.btn ? `<a href="#" class="btn mx-3 my-2 text-danger border">${cardData.btn}</a>` : ''}
                    
                    <div class="d-flex justify-content-between">
                    <div class="user d-flex align-items-center">
                        <img class="rounded-circle me-2 m-2" src="${cardData.author.photo}" alt="User Image" width="40" height="40">
                        <div>
                            <small class="text-muted">${cardData.author.name}</small>
                        </div>
                  </div>
                    <div class="d-flex align-items-center mt-2">
                        <small class="text-muted">
                            <i class="far fa-eye"></i> ${cardData.views || 0}
                        </small>
                        <i class="fas fa-share btn"></i>
                    </div>
                  </div>
                    

                </div>    
            `;
        }


        // Function to render cards
        function renderCards() {
            const cardContainer = document.getElementById('cardContainer');
            apiData.forEach(card => {
                const cardHtml = generateCard(card);
                cardContainer.innerHTML += cardHtml;
            });
        }

        // Render the cards on page load
        window.onload = renderCards;



        // Get the modal for login and logout
        function openPopup() {
            document.getElementById("myPopup").style.display = "block";
        }


        document.getElementById('loginButton').addEventListener('click', function () {
            $('#loginModal').modal('show');
        });
        document.addEventListener('DOMContentLoaded', function () {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            const switchSignIn = document.querySelectorAll('#switchSignIn1, #switchSignIn2');
            const switchSignUp = document.querySelectorAll('#switchSignUp1, #switchSignUp2');
            const currentFormText = document.querySelector('.current-form');

            switchSignIn.forEach(element => {
                element.addEventListener('click', function () {
                    loginForm.style.display = 'block';
                    signupForm.style.display = 'none';
                    currentFormText.innerText = ' Create new for free!';
                });
            });

            switchSignUp.forEach(element => {
                element.addEventListener('click', function () {
                    loginForm.style.display = 'none';
                    signupForm.style.display = 'block';
                    currentFormText.innerText = 'Sign In';
                });
            });
        });


//         const userProfiles = [{
//                 "name": 'Leisure',
//                 "photo": 'https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lIq-qu~eucv9HmQBjitb4TxlWn7OtaBS0j4TLNVgeTq3BS0~Nxe3ggBkfUn01OrmE0EpvArViWXU97ipaFj-uxw1zUN4Zw0Dh0EixSvP4yfio0L8misKZkcUteYk47MqlmUlAnyDPq6h11cELXoYSXJEuO7ZvPDT1L9v~FkMS0ne~oBbrI896769fGkr-wtU0iZqBAqcxe-cYbSSXvv4AXb3IFkt9qFWUEk1UPj9eN4H7sPN8iwqFava~6eB50WID13D~iSr5sIIbqMFsbzSdLGHvUFLdE46~0tVYnJME5Za5cZKUt-5qq21~yAh4iWfFNiJ77JNlVW4TPcKWUlkzA__'
//             },
//             {
//                 "name": 'Activism',
//                 "photo": 'https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F8X7OLaSd3tDLNr2Vija83CFYAImeHtDs6Crf9SyYWzrZym~Xa8njFds~x71sx0wSDBu7g5rVLCM0IDdfN8zXC9XhiOsSc7nR1QocNPlCF87Vrq~DHO6Mf5JihJMQ4aE6zNQhBkmxqtQ3ANE7n~l5YReAkC06pkg94piV1dd8ToECfCDucXKtdUbqrkXfVPPOwlh8b-WPxwlETlFRPv2eH-WEjzKOEbHrl8JO6zyg~5A1pXkTuNSUPq43ZC-SnJnj048OW5zGvIyBiHthRtiefyHfRapnQHqNqzF4c-sNED~zqcEk29dnon5eQd6ACpBij1ALMcyVBC0XY-gelg6EA__'
//             },
//             {
//                 "name": 'MBA',
//                 "photo": 'https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Thg9TATS74Sw4XChACwkh~RM4kAckg~Cz6~ImrvT61KmcYUwXswq8ninjUQgnC1kjA0FZViEQK5bPu1yODDWHdSlp0C7BMQH7~80A3koZMKWw55zavAnY6o41dlhVje25CbjO7HbsOMeX53M7R4Gu1e~i~GNyNvJTAPR~~svZar4nNcvk~AAghLrvE9mzec3cO1o5Qmx-G1MqTWbTcDG4Gw1YgVgk4Ky7qVRsG0LqkRJCTSmgGyYpzLrlbcwbO-Jr9GXWZqJVskCpAZseMte0n4bxOgnsAxGBFib-7l20hjZyW~gTy9oG-n4UuQyuNVTmv2Totb-YakSFZ46cJ7pNQ__'
//             },
//             {
//                 "name": 'Philosophy',
//                 "photo": 'https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hEtw~GdzzJVMQyL~86TCq6pOa-yw79-0LrvxNe4zwDYQMvMewOJ~2k1P5laALL8nQ5HAV1usvtsufBW~ls0pwFmAyd0SiMYGB-Xx0a~qj9ZZP-up2vORZG03gbfrMBbREzvbX2PdUTSpA6C9f~CwDmiDOBb2Iti07zNi~lufPhsiktX6iM012XpG1dttppS3uBrVvscZpSXdnsWNCSe9oeail4BsaMl4n1~waPb89-txb9pZK0GfVt50GrLGpcJWv8O4W~lOYQIM9nouSYnWb48AqHl73ZBAcwfip1KC~DDL39a~AqiLrV8vEYS16qeA-2nO8AE2y7-f1f3biCbxDw__'
//             },
//             // Add more profiles as needed
//         ];

//         // Function to display user profile
//         function displayUserProfile(userProfile) {
//             return `
//   <div class="row-col d-flex flex-row align-items-center justify-content-between mb-4 p-0 m-0 start-0">
//       <div class="container d-flex align-items-center col-6  p-0 m-0 start-0">
//         <img class="rounded-circle me-2 " src="${userProfile.photo}" alt="User Image" width="36" height="36">
//         <p class="h6 text-muted">${userProfile.name}</p>
//       </div>
//       <div class="container col-6 d-inline-flex position-relative justify-content-end mx-4">
//       <button class="rounded-4 bg-gray mt-2 border" onclick="toggleFollow(this)" width="60" height="24">Follow</button>
//       </div>
//   `;
//         }

//         // Function to render user profiles
//         function renderProfiles() {
//             const profileContainer2 = document.querySelectorAll('#profile-container2');
//             const profileContainer = document.querySelectorAll('#profile-container');


//             userProfiles.forEach(profile => {
//                 const profileHtml = displayUserProfile(profile);
//                 profileContainer2.innerHTML += profileHtml;
//                 profileContainer.innerHTML += profileHtml;

//             });
//         }

        // Render the profiles on page load
        window.onload = renderProfiles;


        function toggleFollow(button) {
            // Toggle the button's background color and text color
            button.classList.toggle("bg-black");
            button.classList.toggle("text-white");

            // Toggle the text between "Follow" and "Following"
            button.innerHTML = (button.innerHTML === "Follow") ? "Following" : "Follow";
        }
