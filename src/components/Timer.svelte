<script>
    import { onDestroy } from "svelte";

    export let countdown;
    export const deleteTimer = () => {};

    let now = Date.now();
    let end = now + countdown * 1000;

    $: count = Math.round((end - now) / 1000);
    $: h = Math.floor(count / 3600);
    $: m = Math.floor((count - h * 3600) / 60);
    $: s = count - h * 3600 - m * 60;

    function updateTimer() {
        now = Date.now();
    }

    let interval = setInterval(updateTimer, 1000);
    $: if (count === 0) clearInterval(interval);

    function padValue(value, length = 2, char = "0") {
        const { length: currentLength } = value.toString();
        if (currentLength >= length) return value.toString();
        return `${char.repeat(length - currentLength)}${value}`;
    }

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="timer">
    {#each Object.entries({ h, m, s }) as [key, value], i}
        {#if countdown >= 60 ** (2 - i)}
            <span class="fs-3">{padValue(value)}{key} </span>
        {/if}
    {/each}
</div>