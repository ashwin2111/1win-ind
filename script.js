// Constants
const downloadLink =
  "https://www.dropbox.com/scl/fi/0dyewmlz1utorvtqsvgks/1win.apk?rlkey=o8kafcy2g81ngb90uzqbnb7s1&st=to4yg1q6&dl=1";
const commonUrl1 = "https://1wdgx.com/?open=register&p=xl5t";
const commonUrl2 = "https://1wuyue.top/?p=7ahd";
const luckyJetUrl = "https://1weaou.life/v3/lucky-jet-updated?p=9kh3";
const jetXUrl = "https://1weaou.life/v3/jetx-landing?p=w19z";
const aviatorUrl = "https://1weaou.life/v3/reg-form-aviator?p=8f67";

// Button IDs
const downloadBtns = ["downloadBtn", "downloadBtnApk", "downloadBtniOS"];

// Element References
const elements = {
  registerBtn: document.getElementById("registerBtn"),
  usePromocode: document.getElementById("usePromocode"),
  joinnowBtn: document.getElementById("joinnowBtn"),
  officialWebsite: document.getElementById("officialWebsite"),
  mobileNavOverlay: document.getElementById("mobileNavOverlay"),
  closeNavButton: document.getElementById("closeNavButton"),
  navbarLinks: document.querySelector(".navbar-links"),
  hamburgerMenus: document.querySelectorAll(
    "#hamburgerMenuLeft, #hamburgerMenuRight"
  ),
};

document.querySelectorAll(".btn-join-luckyjet").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("LuckyJet button clicked!");
    window.location.href = luckyJetUrl;
  });
});

document.querySelectorAll(".btn-join-jetx").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("LuckyJet button clicked!");
    window.location.href = jetXUrl;
  });
});

document.querySelectorAll(".btn-join-aviator").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("LuckyJet button clicked!");
    window.location.href = aviatorUrl;
  });
});

// Function to handle navigation redirects
function handleRedirect(elementId, url) {
  const element = document.getElementById(elementId);

  element &&
    element.addEventListener("click", () => {
      window.location.href = url;
    });
}

// Function to handle file downloads
function handleDownload(elementId, link, fileName) {
  const element = document.getElementById(elementId);

  element &&
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const a = document.createElement("a");
      a.href = link;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
}

// Mobile Navigation Toggle
function setupMobileNavigation() {
  elements.hamburgerMenus.forEach((menu) =>
    menu.addEventListener("click", () => {
      console.log("Hamburger menu clicked!");
      elements.mobileNavOverlay.style.display = "flex";
    })
  );

  elements.closeNavButton.addEventListener("click", () => {
    elements.mobileNavOverlay.style.display = "none";
  });

  // Handle screen resizing
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      elements.navbarLinks.style.display = "flex";
      elements.mobileNavOverlay.style.display = "none";
    } else {
      elements.navbarLinks.style.display = "none";
    }
  });
}

// DOMContentLoaded to ensure DOM is fully loaded before script execution
document.addEventListener("DOMContentLoaded", () => {
  // Apply download functionality
  downloadBtns.forEach((btnId) =>
    handleDownload(btnId, downloadLink, "1win.apk")
  );

  // Apply redirect functionality
  handleRedirect("registerBtn", commonUrl1);
  handleRedirect("usePromocode", commonUrl1);
  handleRedirect("joinnowBtn", commonUrl2);
  handleRedirect("officialWebsite", commonUrl2);

  // Setup mobile navigation
  setupMobileNavigation();
});
