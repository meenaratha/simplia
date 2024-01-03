
    // Set the target date dynamically (e.g., 12 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 12);

    function updateCountdown() {
        // Get the current date and time
        const now = new Date();

        // Calculate the time difference in milliseconds
        const timeDifference = targetDate.getTime() - now.getTime();

        // Check if the countdown has expired
        if (timeDifference < 0) {
            document.getElementById('countdown').innerHTML = 'Countdown Expired';
            document.getElementById('message').innerHTML = 'Sorry, the time limit has expired.';
        } else {
            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Display the countdown
            document.getElementById('countdown').innerHTML = ` ${days} : ${hours} : ${minutes} : ${seconds}`;
            //document.getElementById('countdown').innerHTML = `Countdown: ${days}<span>Days</span> ${hours}<span>Hrs</span> ${minutes}<span>Mins</span> ${seconds}<span>Sec</span>`;
           // document.getElementById('message').innerHTML = 'Sign up now to secure your spot!';
        }
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Initial update
    updateCountdown();


    // service div section
    function changecontent() {
        // Get the h2 element by its ID
        var serviceContent= document.getElementById('service-content');
        var serviceTitle= document.getElementById('ser-title');
        serviceContent.classList.add('div-active');
        // Change the color of the h2 tag
        serviceTitle.style.color = '#fff'; // Change to the desired color
      }   
    // Function to remove the highlight class
    function  removecontent() {
        var serviceContent= document.getElementById('service-content');
        var serviceTitle= document.getElementById('ser-title');
        serviceContent.classList.remove('div-active');
         // Change the color of the h2 tag
         serviceTitle.style.color = '#FF0100'; // Change to the desired color
      }


      // service div section
    function titlechange() {
       
        var serviceTitle= document.getElementById('ser-title');
       
        // Change the color of the h2 tag
        serviceTitle.style.color = '#fff'; // Change to the desired color
      }   
    // Function to remove the highlight class
    function  titleremove() {
       
        var serviceTitle= document.getElementById('ser-title');
       
         // Change the color of the h2 tag
         serviceTitle.style.color = '#FF0100'; // Change to the desired color
      }
