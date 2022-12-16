import { onMount, createSignal, Show } from "solid-js";

type ComixPanelProps = {
    src: string;
    alt: string;
    title: string;
}

export const ComixPanel = (props: ComixPanelProps) => {
    let img: HTMLImageElement;
    const [getAspectRatio, setAspectRatio] = createSignal<number>()
    onMount(() => {
      setAspectRatio(img.clientWidth / img.clientHeight)
      console.log("ComixPanel mounted");
    })
    return (
    <Show when={getAspectRatio}>
      <li class="Comix-panel text-white" style={{"width": `${(getAspectRatio() || 1/2) * 50 }vw` }}>
        <img src={props.src} alt={props.alt} title={props.title} ref={img}/>
      </li>
    </Show>
    )
  }