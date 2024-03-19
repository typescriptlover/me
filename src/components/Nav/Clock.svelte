<script>
   import { onMount } from 'svelte';

   let date = new Date();

   $: time = date.toLocaleTimeString('en-US', { timeZone: 'America/Curacao' });

   onMount(() => {
      const interval = setInterval(() => {
         date = new Date();
      }, 1000);

      return () => {
         clearInterval(interval);
      };
   });
</script>

<p class="tabular-nums text-sm lg:text-base font-anonymous text-neutral-500 font-normal">
   {time} <span class="font-space tracking-tight font-light text-neutral-600">local</span>
</p>
