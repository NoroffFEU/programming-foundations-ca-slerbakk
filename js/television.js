const television = {
  brand: "Samsung",
  powerOn: true,
  volume: 5,
  channels: ["Channel 1", "Channel 2", "Channel 3"],
};

function toggle() {
  const power = document.querySelector(".on");
  const screen = document.querySelector(".screenOn");

  power.classList.toggle("off");
  screen.classList.toggle("screenOff");

  if (power.innerText === "On") {
    power.innerText = "Off";
  } else {
    power.innerText = "On";
  }
}

let currentChannel = 1;
let currentVolume = 1;

function previousChannel() {
  const nextChannel = document.querySelector(".currentChannel");

  if (currentChannel === 3) {
    nextChannel.innerText = "Channel 2";
    currentChannel = 2;
  } else if (currentChannel === 2) {
    nextChannel.innerText = "Channel 1";
    currentChannel = 1;
  } else {
    nextChannel.innerText = "Channel 3";
    currentChannel = 3;
  }
}

function nextChannel() {
  const nextChannel = document.querySelector(".currentChannel");

  if (currentChannel === 1) {
    nextChannel.innerText = "Channel 2";
    currentChannel = 2;
  } else if (currentChannel === 2) {
    nextChannel.innerText = "Channel 3";
    currentChannel = 3;
  } else {
    nextChannel.innerText = "Channel 1";
    currentChannel = 1;
  }
}

function volumeDown() {
  const volume = document.querySelector(".currentVolume");

  if (currentVolume > 1) {
    currentVolume--;
    volume.innerText = "Volume " + currentVolume;
  }
}

function volumeUp() {
  const volume = document.querySelector(".currentVolume");

  if (currentVolume < 5) {
    currentVolume++;
    volume.innerText = "Volume " + currentVolume;
  }
}
