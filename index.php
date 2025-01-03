<!DOCTYPE html>
<html lang="en">
<?php
session_start();

if(!$_SESSION['username']) {
    header('Location: ../admin/login-form.php');
}

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home- Littleroot Dreams</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/main.css?version=0.4">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="../images/favicon/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/svg+xml" href="../images/favicon/favicon.svg">
    <link rel="shortcut icon" href="../images/favicon/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-touch-icon.png">
    <meta name="apple-mobile-web-app-title" content="MyWebSite">
    <link rel="manifest" href="../images/favicon/site.webmanifest">
    <script defer src="js/main_darkmode.js?version=0.4"></script>
    <script defer src="js/main_home.js?version=0.4"></script>
    <script defer src="js/main.js?version=0.4"></script>
</head>
<body class="dm">
    <div id="container">
      <div id="theme-mode-con" class="full-width-grid-con dm">
        <div id="theme-enable">
          <img id="theme-image" src="images/dark-icon.png" alt="Theme Icon">
          <p id="theme-enable-text">Enable <span id="theme-text">Dark</span> Mode</p>
        </div>
      </div>
        <div id="full-length" class="full-width-grid-con dm">
            <header id="main_header" class="grid-con">
            <div id="logo-con" class="col-start-2 col-end-4 m-col-span-full">
              <a href="index.html"><svg id="main-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288.92 65.92">
                <defs>
                  <style>
                    .cls-4 {
                      fill: #fff;
                    }
                  </style>
                </defs>
                <g id="Layer_W_2-2" data-name="Layer_W_2">
                  <g>
                    <path class="cls-4" d="M0,23.47v-1.38l2.46-.94c.15-.05.29-.14.41-.26.12-.12.18-.3.18-.54V3.6c0-.22-.06-.39-.18-.5-.12-.11-.26-.19-.42-.25L0,1.9V.53h11.46v1.38l-2.46.94c-.17.06-.32.15-.45.26s-.19.27-.19.49v17.17h7.62c.17,0,.32-.06.44-.18.12-.12.21-.29.25-.49l1.01-4.7h2.16v8.08H0Z"/>
                    <path class="cls-4" d="M22.58,23.47v-1.38l2.58-.94c.2-.07.35-.17.46-.28.1-.11.15-.29.15-.52V3.6c0-.22-.06-.39-.18-.5-.12-.11-.26-.19-.43-.25l-2.58-.94V.53h11.68v1.38l-2.58.94c-.17.06-.32.15-.44.26s-.18.27-.18.49v16.75c0,.23.06.41.18.53.12.12.27.21.44.27l2.58.94v1.38h-11.68Z"/>
                    <path class="cls-4" d="M42.14,23.47v-1.36l2.62-.96c.2-.07.36-.17.46-.28.11-.11.16-.29.16-.52V3.17h-4.67c-.19,0-.34.05-.45.16-.11.11-.19.26-.24.45l-.93,3.47h-2.1V.53h22.08v6.72h-2.11l-.91-3.47c-.05-.19-.14-.34-.26-.45-.12-.11-.26-.16-.42-.16h-4.7v17.18c0,.23.06.41.19.54.13.12.27.21.43.26l2.64.96v1.36h-11.81Z"/>
                    <path class="cls-4" d="M66.3,23.47v-1.36l2.62-.96c.2-.07.36-.17.46-.28.11-.11.16-.29.16-.52V3.17h-4.67c-.19,0-.34.05-.45.16-.11.11-.19.26-.24.45l-.93,3.47h-2.1V.53h22.08v6.72h-2.11l-.91-3.47c-.05-.19-.14-.34-.26-.45-.12-.11-.26-.16-.42-.16h-4.7v17.18c0,.23.06.41.19.54.13.12.27.21.43.26l2.64.96v1.36h-11.81Z"/>
                    <path class="cls-4" d="M86,23.47v-1.38l2.46-.94c.15-.05.29-.14.41-.26.12-.12.18-.3.18-.54V3.6c0-.22-.06-.39-.18-.5-.12-.11-.26-.19-.42-.25l-2.46-.94V.53h11.46v1.38l-2.46.94c-.17.06-.32.15-.45.26s-.19.27-.19.49v17.17h7.62c.17,0,.32-.06.44-.18.12-.12.21-.29.25-.49l1.01-4.7h2.16v8.08h-19.82Z"/>
                    <path class="cls-4" d="M108.57,23.47v-1.38l2.46-.94c.17-.06.31-.15.42-.27.11-.12.17-.29.17-.53V3.6c0-.22-.06-.39-.18-.5-.12-.11-.26-.19-.42-.25l-2.46-.94V.53h19.92v6.43h-2.13l-.93-3.14c-.05-.19-.13-.34-.24-.45-.11-.11-.25-.16-.43-.16h-7.84v7.04h4.32c.22,0,.38-.05.46-.14s.16-.25.23-.45l.86-2.51h1.78v8.78h-1.78l-.86-2.5c-.06-.18-.14-.33-.22-.44-.09-.11-.24-.17-.46-.17h-4.32v7.94h9.07c.17,0,.31-.06.43-.17s.2-.26.24-.44l.91-3.52h2.13v6.83h-21.14Z"/>
                    <path class="cls-4" d="M133.25,23.47v-1.38l2.46-.94c.16-.06.3-.15.42-.27.12-.12.18-.29.18-.53V3.6c0-.22-.06-.39-.18-.5-.12-.11-.26-.19-.42-.25l-2.46-.94V.53h11.52c1.77,0,3.22.17,4.34.51,1.12.34,1.99.79,2.61,1.36s1.05,1.19,1.28,1.87c.23.68.35,1.37.35,2.06,0,1.17-.24,2.18-.73,3.01s-1.1,1.51-1.85,2.02c-.75.52-1.51.9-2.3,1.16l-3.7,1.6-3.41-.9.16-2.08s.22.05.54.08c.31.03.66.06,1.02.09s.64.04.82.04c.87,0,1.59-.2,2.15-.61.56-.41.98-.92,1.25-1.56s.41-1.3.41-1.99c0-1.4-.35-2.42-1.06-3.06s-1.73-.96-3.07-.96h-1.98v17.17c0,.23.06.41.18.53.12.12.27.21.45.27l2.51.94v1.38h-11.49ZM157.87,23.47h-5.87c-.71,0-1.25-.08-1.62-.23-.36-.15-.66-.39-.89-.71s-.51-.74-.86-1.25l-4.99-7.63,5.01-1.44,5.5,8.06c.14.2.33.41.56.62.23.21.47.36.7.43l2.45.77v1.38Z"/>
                    <path class="cls-4" d="M216.36,23.47v-1.36l2.62-.96c.2-.07.36-.17.46-.28.11-.11.16-.29.16-.52V3.17h-4.67c-.19,0-.34.05-.45.16-.11.11-.19.26-.24.45l-.93,3.47h-2.1V.53h22.08v6.72h-2.11l-.91-3.47c-.05-.19-.14-.34-.26-.45-.12-.11-.26-.16-.42-.16h-4.7v17.18c0,.23.06.41.19.54.13.12.27.21.43.26l2.64.96v1.36h-11.81Z"/>
                  </g>
                  <g>
                    <path class="cls-4" d="M.32,65.14v-1.99l3.51-1.36c.24-.09.44-.22.6-.39.16-.17.24-.42.24-.76v-24.2c0-.32-.08-.56-.24-.72-.16-.15-.36-.28-.6-.37l-3.51-1.36v-1.99h16.32c1.41,0,2.92.15,4.51.46,1.6.31,3.15.83,4.67,1.56,1.52.73,2.9,1.73,4.15,2.99,1.25,1.26,2.24,2.85,2.97,4.75.74,1.9,1.11,4.19,1.11,6.85,0,3.76-.79,6.86-2.36,9.3-1.57,2.44-3.7,4.26-6.37,5.44-2.67,1.19-5.66,1.78-8.96,1.78H.32ZM12.22,35.83v25.45h4.51c3.21,0,5.55-1.05,7.02-3.15,1.47-2.1,2.21-5.05,2.21-8.84,0-2.79-.43-5.18-1.28-7.19-.85-2-2.06-3.55-3.61-4.63-1.56-1.09-3.4-1.63-5.53-1.63h-3.33Z"/>
                    <path class="cls-4" d="M41.11,65.14v-1.99l3.51-1.36c.23-.09.43-.22.59-.39s.25-.42.25-.76v-24.2c0-.32-.08-.57-.25-.73-.17-.16-.36-.28-.59-.36l-3.51-1.36v-1.99h16.41c2.52,0,4.58.25,6.18.74,1.6.49,2.83,1.15,3.72,1.96.88.82,1.49,1.72,1.82,2.7.33.99.5,1.98.5,2.98,0,1.69-.35,3.14-1.04,4.34-.69,1.2-1.57,2.18-2.63,2.92-1.06.75-2.16,1.31-3.28,1.68l-5.27,2.31-4.86-1.29.23-3c.06.03.31.07.76.12.45.05.93.09,1.46.13.52.04.92.06,1.17.06,1.25,0,2.27-.29,3.07-.88.8-.58,1.39-1.34,1.78-2.25s.58-1.88.58-2.88c0-2.02-.5-3.49-1.5-4.41-1-.92-2.46-1.39-4.38-1.39h-2.83v24.8c0,.34.08.59.25.76.17.17.38.3.64.39l3.58,1.36v1.99h-16.37ZM76.2,65.14h-8.37c-1.02,0-1.79-.11-2.3-.33s-.94-.57-1.27-1.03c-.33-.46-.73-1.06-1.22-1.8l-7.11-11.02,7.13-2.08,7.84,11.65c.2.29.46.59.8.9s.67.52,1,.62l3.49,1.11v1.99Z"/>
                    <path class="cls-4" d="M80.31,65.14v-1.99l3.51-1.36c.24-.09.44-.22.6-.39.16-.17.24-.42.24-.76v-24.2c0-.32-.08-.57-.25-.73-.17-.16-.36-.28-.59-.36l-3.51-1.36v-1.99h28.38v9.29h-3.03l-1.32-4.53c-.08-.28-.19-.49-.34-.65-.15-.15-.36-.23-.62-.23h-11.17v10.17h6.16c.32,0,.54-.07.65-.21.11-.14.22-.35.33-.65l1.23-3.63h2.53v12.69h-2.53l-1.23-3.61c-.09-.26-.2-.47-.32-.64-.12-.16-.34-.24-.66-.24h-6.16v11.46h12.93c.24,0,.45-.08.62-.24s.28-.37.34-.64l1.3-5.08h3.03v9.87h-30.11Z"/>
                    <path class="cls-4" d="M115.22,65.14v-1.99l2.35-1.11c.53-.25.93-.67,1.19-1.27l9.28-23.76,2.76-5.52h5.33l11.17,29.37c.11.28.25.53.44.76.19.23.41.39.65.49l2.44,1.04v1.99h-14.82v-1.99l3.83-1.39-7.41-19.04-.91-3.12h-.39l-8.34,22.02,3.88,1.52v1.99h-11.44ZM125.16,54.55l1.46-3.74h9.26l1.44,3.74h-12.15Z"/>
                    <path class="cls-4" d="M155.49,65.14v-1.99l3.51-1.52c.23-.11.43-.24.59-.4.17-.16.25-.4.25-.73v-24.06c0-.32-.08-.56-.24-.72-.16-.15-.36-.28-.6-.37l-3.51-1.36v-1.99h14.54l6.47,18.88,1.12,4.02h.36l7.66-22.9h14.34v1.99l-3.47,1.36c-.24.09-.46.22-.65.38-.19.16-.29.4-.29.7v24.2c0,.34.09.59.29.76.19.17.41.3.65.39l3.47,1.36v1.99h-16.21v-1.99l3.44-1.36c.26-.11.48-.24.65-.4.17-.16.26-.41.26-.75v-23.06h-.41l-1.14,3.58-6.5,18.86-2.17,5.13h-4.15l-8.21-23.99-1.09-3.61h-.41v22.95c0,.34.08.59.25.74.17.15.37.29.62.39l3.46,1.52v1.99h-12.9Z"/>
                    <path class="cls-4" d="M207.68,63.82l-.14-9.73h3.03l1.34,4.41c.08.25.22.47.44.68.22.21.41.37.58.5.53.34,1.2.69,2.02,1.05.81.36,1.66.67,2.54.91.88.25,1.67.37,2.37.37,1.95,0,3.53-.44,4.75-1.31,1.22-.87,1.83-2.02,1.83-3.46,0-1.31-.39-2.27-1.16-2.89-.78-.62-1.85-1.19-3.21-1.73-1.29-.51-2.56-.93-3.82-1.27-1.25-.34-2.49-.75-3.7-1.22-1.88-.74-3.4-1.83-4.54-3.28s-1.71-3.27-1.71-5.48c0-2.05.6-3.83,1.79-5.35,1.19-1.52,2.76-2.7,4.7-3.54,1.94-.84,4.02-1.26,6.26-1.26,1.29,0,2.61.08,3.94.23,1.34.15,2.62.34,3.84.57,1.22.22,2.3.45,3.23.68v9.38h-3.01l-1.3-4.16c-.08-.23-.22-.45-.43-.66s-.41-.37-.59-.5c-.29-.18-.76-.4-1.4-.66-.65-.25-1.35-.48-2.11-.68s-1.47-.3-2.14-.3c-1.85,0-3.26.43-4.21,1.28-.95.85-1.42,1.78-1.42,2.78,0,1.08.33,2,.98,2.76.65.76,1.87,1.44,3.65,2.05,1.22.42,2.41.79,3.58,1.13,1.17.34,2.45.79,3.83,1.34,1.14.46,2.2,1.05,3.17,1.77.97.72,1.76,1.63,2.36,2.73.6,1.1.9,2.45.9,4.06,0,1.91-.52,3.69-1.55,5.35-1.03,1.66-2.62,2.99-4.75,4.01-2.14,1.02-4.84,1.53-8.13,1.53-1.13,0-2.38-.1-3.76-.31s-2.77-.47-4.16-.8c-1.39-.32-2.69-.65-3.89-.99Z"/>
                  </g>
                  <rect class="cls-4" x="247.21" y="31.48" width="41.71" height="3.11" rx="1.56" ry="1.56"/>
                  <path class="cls-4" d="M286.31,34.59h-36.49c-1.43,0-2.61,1.17-2.61,2.61v25.28c0,1.43,1.17,2.61,2.61,2.61h36.49c1.43,0,2.61-1.17,2.61-2.61v-25.28c0-1.43-1.17-2.61-2.61-2.61ZM260.69,47.04h-2.8v2.8c0,.86-.7,1.56-1.56,1.56s-1.56-.7-1.56-1.56v-2.8h-2.8c-.86,0-1.56-.7-1.56-1.56s.7-1.56,1.56-1.56h2.8v-2.8c0-.86.7-1.56,1.56-1.56s1.56.7,1.56,1.56v2.8h2.8c.86,0,1.56.7,1.56,1.56s-.7,1.56-1.56,1.56ZM265.36,61.98c-.69,0-1.25-.56-1.25-1.25s.56-1.24,1.25-1.24,1.24.56,1.24,1.24-.56,1.25-1.24,1.25ZM270.96,61.98c-.69,0-1.24-.56-1.24-1.25s.56-1.24,1.24-1.24,1.25.56,1.25,1.24-.56,1.25-1.25,1.25ZM275.63,49.53c-1.2,0-2.18-.98-2.18-2.18s.98-2.18,2.18-2.18,2.18.98,2.18,2.18-.98,2.18-2.18,2.18ZM281.23,45.17c-1.2,0-2.18-.98-2.18-2.18s.98-2.18,2.18-2.18,2.18.98,2.18,2.18-.98,2.18-2.18,2.18Z"/>
                  <path class="cls-4" d="M286.38,1.11h-36.64c-1.39,0-2.53,1.14-2.53,2.53v25.43c0,1.39,1.14,2.53,2.53,2.53h36.64c1.39,0,2.53-1.14,2.53-2.53V3.64c0-1.39-1.14-2.53-2.53-2.53ZM282.67,24.49c0,.3-.25.55-.55.55h-28.1c-.3,0-.55-.25-.55-.55V5.75c0-.3.25-.55.55-.55h28.1c.3,0,.55.25.55.55v18.74Z"/>
                  <g>
                    <path class="cls-4" d="M267.16,14.76c.11-.41.46-.71.9-.71s.79.31.9.71h3.35c-.13-2.25-1.97-4.04-4.25-4.04s-4.12,1.79-4.25,4.04h3.35Z"/>
                    <path class="cls-4" d="M268.97,15.23c-.11.41-.46.71-.9.71s-.79-.31-.9-.71h-3.35c.13,2.25,1.97,4.04,4.25,4.04s4.12-1.79,4.25-4.04h-3.35Z"/>
                  </g>
                  <g>
                    <path class="cls-4" d="M257.67,14.76c.11-.41.46-.71.9-.71s.79.31.9.71h3.35c-.13-2.25-1.97-4.04-4.25-4.04s-4.12,1.79-4.25,4.04h3.35Z"/>
                    <path class="cls-4" d="M259.47,15.23c-.11.41-.46.71-.9.71s-.79-.31-.9-.71h-3.35c.13,2.25,1.97,4.04,4.25,4.04s4.12-1.79,4.25-4.04h-3.35Z"/>
                  </g>
                  <g>
                    <path class="cls-4" d="M276.66,14.76c.11-.41.46-.71.9-.71s.79.31.9.71h3.35c-.13-2.25-1.97-4.04-4.25-4.04s-4.12,1.79-4.25,4.04h3.35Z"/>
                    <path class="cls-4" d="M278.46,15.23c-.11.41-.46.71-.9.71s-.79-.31-.9-.71h-3.35c.13,2.25,1.97,4.04,4.25,4.04s4.12-1.79,4.25-4.04h-3.35Z"/>
                  </g>
                  <circle class="cls-4" cx="170.8" cy="12.03" r="2.5"/>
                  <rect class="cls-4" x="160.54" y="11.53" width="21" height="1"/>
                  <circle class="cls-4" cx="196.51" cy="12" r="2.5"/>
                  <rect class="cls-4" x="186.01" y="11.5" width="21" height="1"/>
                  <path class="cls-4" d="M181.24,5.86c-.84-1.8-2.12-3.23-3.85-4.28-1.73-1.05-3.92-1.58-6.58-1.58-2.44,0-4.54.52-6.3,1.54-1.75,1.03-3.1,2.44-4.03,4.24-.93,1.8-1.4,3.86-1.4,6.18,0,2.46.45,4.59,1.35,6.39.9,1.8,2.22,3.19,3.97,4.17,1.74.98,3.87,1.47,6.38,1.47,2.06,0,3.83-.34,5.31-1.01,1.48-.67,2.7-1.58,3.64-2.73.94-1.15,1.64-2.44,2.09-3.87.45-1.43.67-2.91.67-4.42,0-2.27-.42-4.31-1.26-6.11ZM170.8,21.62c-4.83,0-8.75-4.31-8.75-9.62s3.92-9.62,8.75-9.62,8.75,4.31,8.75,9.62-3.92,9.62-8.75,9.62Z"/>
                  <path class="cls-4" d="M206.96,5.86c-.84-1.8-2.12-3.23-3.85-4.28-1.73-1.05-3.92-1.58-6.58-1.58-2.44,0-4.54.52-6.3,1.54-1.75,1.03-3.1,2.44-4.03,4.24-.93,1.8-1.4,3.86-1.4,6.18,0,2.46.45,4.59,1.35,6.39.9,1.8,2.22,3.19,3.97,4.17,1.74.98,3.87,1.47,6.38,1.47,2.06,0,3.83-.34,5.31-1.01,1.48-.67,2.7-1.58,3.64-2.73.94-1.15,1.64-2.44,2.09-3.87.45-1.43.67-2.91.67-4.42,0-2.27-.42-4.31-1.26-6.11ZM196.51,21.62c-4.83,0-8.75-4.31-8.75-9.62s3.92-9.62,8.75-9.62,8.75,4.31,8.75,9.62-3.92,9.62-8.75,9.62Z"/>
                </g>
              </svg></a>
            </div>

            <div id="hamburger-menu" class="col-start-4 col-end-5">
              <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.83 22">
                  <defs>
                    <style>
                      .cls-1 {
                        fill: #ffffff;
                        stroke: #ffffff;
                        stroke-miterlimit: 10;
                        stroke-width: 2px;
                      }
                    </style>
                  </defs>
                  <g id="Layer_2-3" data-name="Layer 2">
                    <line class="cls-1" y1="1" x2="51.83" y2="1"/>
                    <line class="cls-1" y1="11" x2="51.83" y2="11"/>
                    <line class="cls-1" y1="21" x2="51.83" y2="21"/>
                  </g>
                </svg>
          
              </div>
              <div id="nav-menu" class="col-start-4 col-end-5 m-col-span-full">
                  <ul id="header_links">
                      <li><a href="index.html">Home</a></li>
                      <li class="line-spacer"></li>
                      <li><a href="about_page.html">About</a></li>
                      <li class="line-spacer"></li>
                      <li id="game-info-button"><p>Game Information ▼</p></li>
                      <li class="line-spacer"></li>
                      <li id="activity-button"><p>Activities ▼</p></li>
                      <li class="line-spacer"></li>
                      <li><a href="contact.html">Contact</a></li>
                  </ul>
  
                  <div id="game-info-menu" class="dm">
                    <ul id="info-links">
                      <li><a href="trainer_data.html">Trainer Data</a></li>
                      <li class="horizontal-line"></li>
                      <li><a href="sandwich.html">Area Zero Sandwich Filter</a></li>
                      <li class="horizontal-line"></li>
                      <li><a href="usage.html">Pokemon Usage</a></li>
                    </ul>
                  </div>
  
                  <div id="activity-menu" class="dm">
                    <ul id="activity-links">
                      <li><a href="custom_pokedex.html">Create Your Own Pokedex</a></li>
                      <li class="horizontal-line"></li>
                      <li><a href="guess_who.html">Guess Who</a></li>
                      <li class="horizontal-line"></li>
                      <li><a href="pokemon_fight.html">Challenge Prompt Generator</a></li>
                      <li class="horizontal-line"></li>
                      <li><a href="shiny.html">Shiny Counter</a></li>
                      <li class="horizontal-line"></li>
                      <li><a href="league-maker.html">Custom League Maker</a></li>
                    </ul>
                  </div>
              </div>
          </header>
      </div>
    

    <section id="main-update" class="grid-con">
      <div id="welcome-con" class="col-span-full m-col-span-8 dm">
        <h3 id="welcome-heading">Welcome to Littleroot Dreams</h3>
        <p id="welcome-text">Welcome to Littleroot Dreams, a Pokemon fan website dedicated to delivering resources and activites that you may not find anywhere else. Get started by browsing some of our pages down below!</p>

        <div id="welcome-feature-con">
          <a class="welcome-feature" href="custom_pokedex.html">
            <div>
              <div class="feature-image" id="feature-custom-image"></div>
              <div class="feature-text">
                <h3 class="feature-title">Create Your Own Pokedex</h3>
                <p>Create and share your very own Pokedex!</p>
              </div>
            </div>
          </a>
  
          <a class="welcome-feature" href="guess_who.html">
            <div>
              <div class="feature-image" id="feature-gw-image"></div>
              <div class="feature-text">
                <h3 class="feature-title">Guess Who</h3>
                <p>Play a browser based version of Guess Who with a friend!</p>
              </div>
            </div>
          </a>

          <a class="welcome-feature" href="usage.html">
            <div>
              <div class="feature-image" id="feature-usage-image"></div>
              <div class="feature-text">
                <h3 class="feature-title">Pokemon Usage</h3>
                <p>Find out how many times a Pokemon has been used in the games!</p>
              </div>
            </div>
          </a>

          <a class="welcome-feature" href="league-maker.html">
            <div>
              <div class="feature-image" id="feature-league-image"></div>
              <div class="feature-text">
                <h3 class="feature-title">Custom League Maker</h3>
                <p>Create your own Pokemon League to share!</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div id="update-con" class="col-span-full m-col-start-9 m-col-end-13 dm">
        <h3 id="main-title">Site Updates</h3>
        <ul id="main-site-updates"></ul>
      </div>
    </section>

    <section id="bottom" class="full-width-grid-con dm">
        <div id="footer-info" class="grid-con">
            <h2 class="hidden">Copyright Information</h2>
            <p class="col-span-full footer-credit">All images used are used for a transformative work and nonprofit. The images are copyrighted or is a registered trademark. The contributor claims fair use. No copyright infringement is intended.<br>Certain materials are included under fair use exemption of the U.S. Copyright Law and are restricted from further use.<br>Littleroot Dream is a fansite and are not official in any shape or form, nor affiliated, sponsored, or endorsed by Nintendo, Creatures, GAMEFREAK, or TPCi.<br>Pokémon and All Respective Names are Trademark & © of Nintendo 1996-2025</p>
        </div>       
    </section>

    <section id="main-mobile-menu" class="full-width-grid-con mobile-menu dm">
      <h1 class="hidden">Mobile Menu</h1>
      <div class="col-start-2 col-span-1 mobile-links">
          <a class="header-link" href="index.html">Home</a>
          <a class="header-link" href="about_page.html">About</a>
          <p class="header-link gameinfo-mobile-button">Game Information ▼</p>
          <p class="header-link activity-mobile-button">Activities ▼</p>
          <a class="header-link" href="contact.html">Contact</a>
      </div>

      <div class="col-span-1 mobile-close">
          <p class="close-button">X</p>
      </div>
  </section>

  <section id="gameinfo-mobile-menu" class="full-width-grid-con mobile-menu dm">
    <h1 class="hidden">Game Info Mobile Menu</h1>
      <div class="col-start-2 col-span-1 mobile-links">
          <a class="header-link" href="trainer_data.html">Trainer Data</a>
          <a class="header-link" href="sandwich.html">Area Zero Sandwich Filter</a>
          <a class="header-link" href="usage.html">Pokemon Usage</a>
      </div>

      <div class="col-span-1 mobile-close">
          <p class="close-button">X</p>
      </div>
  </section>

  <section id="activity-mobile-menu" class="full-width-grid-con mobile-menu dm">
    <h1 class="hidden">Activity Mobile Menu</h1>
      <div class="col-start-2 col-span-1 mobile-links">
          <a class="header-link" href="custom_pokedex.html">Create Your Own Pokedex</a>
          <a class="header-link" href="guess_who.html">Guess Who</a>
          <a class="header-link" href="pokemon_fight.html">Challenge Prompt Generator</a>
          <a class="header-link" href="shiny.html">Shiny Counter</a>
          <a class="header-link" href="league-maker.html">Custom League Maker</a>
      </div>

      <div class="col-span-1 mobile-close">
          <p class="close-button">X</p>
      </div>
  </section>
</div>
</body>
</html>