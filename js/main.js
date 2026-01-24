$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
	{
            name: 'Channel 1',
            autoplay: true,
            sources: [
                {src: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 2',
            autoplay: true,
            sources: [
                {src: 'https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 3',
            autoplay: true,
            sources: [
                {src: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 4',
            autoplay: true,
            sources: [
                {src: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Channel 5',
            autoplay: true,
            sources: [
                {src: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8', type: 'application/x-mpegURL'},
            ]
	},
	{
            name: 'Channel 6',
            autoplay: true,
            sources: [
                {src: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: 'Channel 7',
            autoplay: true,
            sources: [
                {src: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: 'Channel 8',
            autoplay: true,
            sources: [
                {src: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8', type: 'application/x-mpegURL'},
            ]
	}, 
	{
            name: 'Channel 9',
            autoplay: true,
            sources: [
                {src: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8', type: 'application/x-mpegURL'},
            ]
        },
	{
            name: 'Channel 10',
            autoplay: true,
            sources: [
                {src: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8', type: 'application/x-mpegURL'},
            ]
	}

    ]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});



(function cyberpunkLock(){
  const KEY = "cp_unlocked_v1";

  const overlay = document.getElementById("cpOverlay");
  const input = document.getElementById("cpInput");
  const btn = document.getElementById("cpBtn");
  const msg = document.getElementById("cpMsg");
  const card = overlay?.querySelector(".cpCard");

  // ✅ If already unlocked before, don't ask again (even after refresh)
  if (localStorage.getItem(KEY) === "1") {
    if (overlay) overlay.style.display = "none";
    document.body.classList.remove("cp-locked");
    return;
  }

  // lock whole page so input always works
  document.body.classList.add("cp-locked");

  function unlock(){
    localStorage.setItem(KEY, "1"); // ✅ remember unlock
    overlay.style.display = "none";
    document.body.classList.remove("cp-locked");
  }

  function wrong(){
    msg.textContent = "ACCESS DENIED";
    msg.style.color = "rgba(255,43,214,.95)";
    if (card){
      card.classList.remove("cpShake");
      void card.offsetWidth; // restart animation
      card.classList.add("cpShake");
    }
    if (input) input.value = "";
    if (input) input.focus();
  }

  function ok(){
    msg.textContent = "ACCESS GRANTED";
    msg.style.color = "rgba(0,255,154,.95)";
    setTimeout(unlock, 250);
  }

  function check(){
    const pw = (input?.value || "").trim();
    if (pw === "1234") ok();
    else wrong();
  }

  btn?.addEventListener("click", check);
  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") check();
  });

  window.addEventListener("load", () => {
    setTimeout(() => input?.focus(), 60);
  });
})();
