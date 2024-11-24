<script>
    import music from "$lib/images/music.png"
    import { onMount } from "svelte";
    let isPlayerVisible = true;
    
    // Graduation album Spotify ID
    const albumId = '5fPglEDz9YEwRgbLRvhCZy';
    onMount(() => {
    isPlayerVisible = true;
  });
  </script>
  
  <!-- Floating Music Button -->
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Toggle Button -->
    <button
      on:click={() => isPlayerVisible = !isPlayerVisible}
      class="relative group bg-white/10 backdrop-blur-xl rounded-full p-4
             border-2 border-white/20 shadow-xl
             transform transition-all duration-300
             hover:scale-110 hover:rotate-12
             active:scale-95"
    >
      <img src={music} alt="music"
        class="text-white transform transition-all duration-300
               group-hover:scale-110 group-hover:text-purple-300" 
      />
      
      <!-- Ripple Effect -->
      <div class="absolute inset-0 rounded-full bg-white/20 
                  transform scale-0 opacity-0 
                  group-hover:scale-150 group-hover:opacity-100 
                  transition-all duration-700">
      </div>
      
      <!-- Pulsing Ring -->
      <div class="absolute inset-0 rounded-full border-2 border-white/40
                  animate-ping opacity-75">
      </div>
    </button>
  
    <!-- Player Container -->
    {#if isPlayerVisible}
      <div 
        class="absolute bottom-20 right-0 w-80 md:w-96
               transform transition-all duration-500 
               animate-slide-up"
      >
        <div class="relative bg-white/10 backdrop-blur-xl rounded-2xl 
                    border-2 border-white/20 shadow-2xl 
                    overflow-hidden group">
          <!-- Header -->
          <div class="flex items-center justify-between p-4 
                      bg-gradient-to-r from-purple-500/20 to-pink-500/20">
            <span class="text-white font-yechill font-bold">
              Now Playing: Graduation
            </span>
            <button 
              on:click={() => isPlayerVisible = false}
              class="text-white/80 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
  
          <!-- Spotify Embed -->
          <iframe
            title="Spotify Player"
            src="https://open.spotify.com/embed/album/{albumId}?utm_source=generator&theme=0"
            width="100%"
            height="380"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            class="bg-black/50"
          ></iframe>
  
          <!-- Decorative Elements -->
          <div class="absolute inset-0 pointer-events-none">
            <div class="w-32 h-32 bg-purple-500/10 rounded-full -top-16 -left-16 absolute blur-xl"></div>
            <div class="w-32 h-32 bg-pink-500/10 rounded-full -bottom-16 -right-16 absolute blur-xl"></div>
          </div>
        </div>
      </div>
    {/if}
  </div>
  
  <style>
    /* Slide up animation */
    @keyframes slide-up {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  
    .animate-slide-up {
      animation: slide-up 0.5s ease-out forwards;
    }
  
    /* Hover glow effect */
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
      50% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.2); }
    }
  
    .group:hover {
      animation: glow 2s ease-in-out infinite;
    }
  
    /* Make iframe responsive */
    iframe {
      display: block;
      transition: all 0.3s ease;
    }
  </style>