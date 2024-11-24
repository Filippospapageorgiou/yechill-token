<script lang="ts">
    import SpotifyPLayer from "$lib/components/SpotifyPLayer.svelte";
    import twitter from "$lib/images/twitter.png"
    import meme from "$lib/images/meme.png" 
    import pump from "$lib/images/pump.webp"
    import dex from "$lib/images/dex.png"
    const buttons = [
    { label: "Buy now", id: "buy" },
    { label: "Chart", id: "chart" },
  ];
  const socialLinks = [
    { name: 'X / Twitter', icon: twitter, url: 'https://x.com/YechillOnSOL' },
    { name: 'Pump.fun', icon: pump, url: 'https://pump.fun/coin/FjkwgdR32DX2PXMLWSpnqb1o7B9C3DxmD1SKQMkipump' },
    { name: 'Dex' , icon:dex , url: '#'},
  ];
  const tokenomicsData = {
    contract: "FjkwgdR32DX2PXMLWSpnqb1o7B9C3DxmD1SKQMkipump",
    supply: "1.000.000.000",
    lp: "BURNED",
    tax: "0%",
    platform: "PUMPFUN"
  };
</script>

<div 
  class="min-h-screen w-full relative"
  style="background-image: url({meme}); background-size: cover; background-position: center; background-repeat: no-repeat;"
>
  <!-- Gradient Overlay for entire section -->
  <div class="absolute inset-0 bg-gradient-to-b from-purple-300/80 via-pink-400/80 to-orange-300/80 backdrop-blur-sm"></div>

  <!-- Content Container -->
  <div class="relative z-10 w-full min-h-screen flex flex-col">
    <!-- Top Section with Token Name -->
    <div class="flex items-center justify-center pt-20">
      <p class="font-bold text-white text-5xl md:text-6xl font-yechill animate-bounce-slow drop-shadow-lg">
        $YECHILL
      </p>
    </div>

    <!-- Coin Section -->
    <div class="flex-1 flex items-center justify-center px-4 py-12">
      <div class="relative group">
        <!-- Background Glow -->
        <div class="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500"></div>

        <!-- Coin Container -->
        <div class="relative w-64 h-64 md:w-96 md:h-96 rounded-full 
                    bg-white/10 backdrop-blur-xl p-4
                    border border-white/20 shadow-2xl
                    transform transition-all duration-500
                    hover:scale-105 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]">
          
          <!-- Spinning Coin -->
          <div class="w-full h-full rounded-full overflow-hidden
                      animate-spin-fast
                      transition-all duration-300">
            <img
              src={meme}
              alt="Token"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Orbiting Elements -->
        <div class="absolute top-0 left-0 w-full h-full animate-spin-reverse-slow pointer-events-none">
          <div class="absolute w-6 h-6 bg-white/40 rounded-full -top-8 left-1/2 blur-sm"></div>
          <div class="absolute w-4 h-4 bg-pink-400/40 rounded-full -bottom-8 right-1/2 blur-sm"></div>
          <div class="absolute w-8 h-8 bg-purple-400/40 rounded-full top-1/2 -left-8 blur-sm"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="relative w-full overflow-hidden py-20">
    
    <!-- Background Overlay -->
<div class="absolute inset-0 bg-gradient-to-b from-orange-300/90 to-purple-300/90 backdrop-blur-sm text-3xl"></div>
  
    <!-- Content Container -->
    <div class="relative z-10 container mx-auto px-4">
      <div class="flex flex-col items-center text-center max-w-4xl mx-auto">
        <!-- Main Heading -->
        <h2 class="text-5xl md:text-7xl font-bold text-white mb-8 tracking-wide
                   font-yechill drop-shadow-lg animate-bounce-slow">
          JOIN THE COMMUNITY
        </h2>
  
        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl font-yechill
                  leading-relaxed drop-shadow-md">
          YOU CAN JOIN OUR COMMUNITY WITH LINK BELOW AND/OR FOLLOW
          US ON X FOR REGULAR UPDATES ON THE PROJECT.
        </p>
        <!--Add icons-->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto">
            {#each socialLinks as { name, icon: Icon, url }}
              <a
                href={url}
                class="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6
                       border-2 border-white/20 flex flex-col items-center gap-3
                       transform transition-all duration-300
                       hover:scale-105 hover:-translate-y-1
                       shadow-lg hover:shadow-2xl
                       overflow-hidden"
              >
                <!-- Background Glow -->
                <div class="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0
                            transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <!-- Icon Container -->
                <div class="relative z-10 w-16 h-16 bg-white/20 rounded-xl
                            flex items-center justify-center
                            transform transition-all duration-300
                            group-hover:scale-110 group-hover:rotate-6">
                <img src={Icon}  
                    class="text-white transform transition-all duration-300
                           group-hover:scale-110"
                   alt="icon"/>
                </div>
                
                <!-- Name -->
                <span class="text-white font-yechill text-lg font-bold relative z-10
                           transition-all duration-300 group-hover:scale-105">
                  {name}
                </span>
                
                <!-- Decorative Corner Elements -->
                <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40
                            transform -translate-x-1 -translate-y-1"></div>
                <div class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/40
                            transform translate-x-1 -translate-y-1"></div>
                <div class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/40
                            transform -translate-x-1 translate-y-1"></div>
                <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40
                            transform translate-x-1 translate-y-1"></div>
              </a>
            {/each}
          </div>
      </div>
    </div>
  
    <!-- Decorative Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Animated floating particles -->
      <div class="absolute w-4 h-4 bg-white/30 rounded-full top-1/4 left-1/4 animate-float"></div>
      <div class="absolute w-6 h-6 bg-white/30 rounded-full bottom-1/4 right-1/4 animate-float-delay"></div>
      <div class="absolute w-8 h-8 bg-white/30 rounded-full top-3/4 left-1/3 animate-float-slow"></div>
    </div>
</div>
<div class="relative w-full py-24 bg-gradient-to-b from-purple-300/90 to-orange-300/90">
    <!-- Main Container -->
    <div class="container mx-auto px-4">
      <!-- Title -->
      <h2 class="text-6xl md:text-7xl font-bold text-white text-center mb-16 
                 font-yechill drop-shadow-lg animate-bounce-slow">
        TOKENOMICS
      </h2>
  
      <!-- Tokenomics Grid -->
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contract Address Card - Full Width -->
        <div class="md:col-span-2">
          <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/20
                      transform transition-all duration-300 hover:scale-102 group
                      shadow-xl hover:shadow-2xl">
            <h3 class="text-2xl font-bold text-white mb-2 font-yechill">CA:</h3>
            <p class="text-white font-mono text-lg break-all select-all cursor-pointer
                      hover:bg-white/10 text-bold rounded-lg p-2 transition-all">
              {tokenomicsData.contract}
            </p>
          </div>
        </div>
  
        <!-- Other Tokenomics Cards -->
        {#each Object.entries(tokenomicsData).slice(1) as [key, value]}
          <div class="group">
            <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/20
                        transform transition-all duration-300 hover:scale-105
                        shadow-xl hover:shadow-2xl
                        h-full flex flex-col justify-between">
              <h3 class="text-2xl font-bold text-white mb-4 font-yechill uppercase">
                {key}:
              </h3>
              <p class="text-4xl text-white font-yechill group-hover:animate-pulse">
                {value}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  
    <!-- Decorative Elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="w-64 h-64 bg-purple-500/10 rounded-full -top-32 -left-32 absolute blur-3xl animate-pulse"></div>
      <div class="w-64 h-64 bg-orange-500/10 rounded-full -bottom-32 -right-32 absolute blur-3xl animate-pulse delay-1000"></div>
      
      <!-- Floating Particles -->
      <div class="w-4 h-4 bg-white/30 rounded-full absolute top-1/4 left-1/4 animate-float"></div>
      <div class="w-6 h-6 bg-white/30 rounded-full absolute bottom-1/4 right-1/4 animate-float-delay"></div>
      <div class="w-8 h-8 bg-white/30 rounded-full absolute top-3/4 left-1/3 animate-float-slow"></div>
    </div>
</div>

<SpotifyPLayer />

<style>
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  
    @keyframes spin-reverse-slow {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
  
    .animate-spin-fast {
      animation: spin-slow 10s linear infinite;
    }
  
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

 

   /* Shake animation */
   @keyframes shake {
     0%, 100% { transform: translateX(0); }
     25% { transform: translateX(-4px) rotate(1deg); }
     50% { transform: translateX(4px) rotate(1deg); }
     75% { transform: translateX(-4px) rotate(-1deg); }
   }

   /* Periodic shake animation that runs every 2 seconds */
   @keyframes shake-periodic {
     0%, 90%, 100% { 
      transform: translateX(0) scale(1); 
    }
    92% { 
      transform: translateX(-2px) rotate(-0.5deg) scale(1.02); 
    }
    94% { 
      transform: translateX(2px) rotate(0.5deg) scale(1.02); 
    }
    96% { 
      transform: translateX(-2px) rotate(-0.5deg) scale(1.02); 
    }
    98% { 
      transform: translateX(2px) rotate(0.5deg) scale(1.02); 
    }
  }

 


  /* Optional: Add a subtle pulse animation to draw attention */
  @keyframes subtle-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }


   @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-bounce-slow {
    animation: bounce-slow 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-20px) translateX(10px); }
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  .animate-float-delay {
    animation: float 4s ease-in-out infinite;
    animation-delay: 1s;
  }

  .animate-float-slow {
    animation: float 6s ease-in-out infinite;
    animation-delay: 2s;
  }
</style>