(function () {
  const attachTooltips = (root: Document | HTMLElement = document) => {
    const elements = root.querySelectorAll<HTMLElement>("[tooltip-title]");

    elements.forEach((el) => {
      if ((el as any)._tooltipAttached) return; // prevent duplicates
      (el as any)._tooltipAttached = true;

      let tooltipEl: HTMLDivElement | null = null;

      const show = () => {
        const text = el.getAttribute("tooltip-title");
        const position = el.getAttribute("tooltip-position") || "top";
        if (!text) return;

        tooltipEl = document.createElement("div");
        tooltipEl.innerText = text;
        tooltipEl.style.position = "absolute";
        tooltipEl.style.padding = "4px 8px";
        tooltipEl.style.background = "black";
        tooltipEl.style.color = "white";
        tooltipEl.style.fontSize = "12px";
        tooltipEl.style.borderRadius = "4px";
        tooltipEl.style.pointerEvents = "none";
        tooltipEl.style.opacity = "0";
        tooltipEl.style.transition = "opacity 0.2s";
        tooltipEl.style.whiteSpace = "nowrap";
        document.body.appendChild(tooltipEl);

        const rect = el.getBoundingClientRect();
        requestAnimationFrame(() => {
          if (!tooltipEl) return;
          tooltipEl.style.opacity = "1";

          switch (position) {
            case "bottom":
              tooltipEl.style.top = rect.bottom + 6 + "px";
              tooltipEl.style.left =
                rect.left + rect.width / 2 - tooltipEl.offsetWidth / 2 + "px";
              break;
            case "left":
              tooltipEl.style.top =
                rect.top + rect.height / 2 - tooltipEl.offsetHeight / 2 + "px";
              tooltipEl.style.left = rect.left - tooltipEl.offsetWidth - 6 + "px";
              break;
            case "right":
              tooltipEl.style.top =
                rect.top + rect.height / 2 - tooltipEl.offsetHeight / 2 + "px";
              tooltipEl.style.left = rect.right + 6 + "px";
              break;
            default: // top
              tooltipEl.style.top = rect.top - tooltipEl.offsetHeight - 6 + "px";
              tooltipEl.style.left =
                rect.left + rect.width / 2 - tooltipEl.offsetWidth / 2 + "px";
          }
        });
      };

      const hide = () => {
        if (tooltipEl) {
          tooltipEl.remove();
          tooltipEl = null;
        }
      };

      el.addEventListener("mouseenter", show);
      el.addEventListener("mouseleave", hide);
    });
  };

  // Initial scan
  attachTooltips();

  // Observe for dynamically added elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          attachTooltips(node);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
