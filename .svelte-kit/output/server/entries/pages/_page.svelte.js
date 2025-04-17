import { n as sanitize_props, q as rest_props, p as push, G as getContext, t as fallback, x as spread_attributes, y as clsx, w as slot, u as element, v as bind_props, m as pop, s as setContext, C as attr_class, K as attr_style, E as stringify, I as attr, F as escape_html } from "../../chunks/index.js";
import { t as twMerge } from "../../chunks/bundle-mjs.js";
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "pill",
    "outline",
    "size",
    "href",
    "type",
    "color",
    "shadow",
    "tag",
    "checked",
    "disabled"
  ]);
  push();
  const group = getContext("group");
  let pill = fallback($$props["pill"], false);
  let outline = fallback($$props["outline"], false);
  let size = fallback($$props["size"], group ? "sm" : "md");
  let href = fallback($$props["href"], () => void 0, true);
  let type = fallback($$props["type"], "button");
  let color = fallback($$props["color"], group ? outline ? "dark" : "alternative" : "primary");
  let shadow = fallback($$props["shadow"], false);
  let tag = fallback($$props["tag"], "button");
  let checked = fallback($$props["checked"], () => void 0, true);
  let disabled = fallback($$props["disabled"], false);
  const colorClasses = {
    alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700",
    blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
    purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
    red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
    none: ""
  };
  const colorCheckedClasses = {
    alternative: "text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",
    blue: "text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",
    dark: "text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",
    green: "text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",
    light: "text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",
    primary: "text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",
    purple: "text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",
    red: "text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",
    yellow: "text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",
    none: ""
  };
  const coloredFocusClasses = {
    alternative: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    blue: "focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
    dark: "focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
    green: "focus-within:ring-green-300 dark:focus-within:ring-green-800",
    light: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    primary: "focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
    purple: "focus-within:ring-purple-300 dark:focus-within:ring-purple-900",
    red: "focus-within:ring-red-300 dark:focus-within:ring-red-900",
    yellow: "focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
    none: ""
  };
  const coloredShadowClasses = {
    alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    light: "shadow-gray-500/50 dark:shadow-gray-800/80",
    primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
    none: ""
  };
  const outlineClasses = {
    alternative: "text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
    primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
    none: ""
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  buttonClass = twMerge("text-center font-medium", group ? "focus-within:ring-2" : "focus-within:ring-4", group && "focus-within:z-10", group || "focus-within:outline-hidden", "inline-flex items-center justify-center " + sizeClasses[size], outline && checked && "border dark:border-gray-900", outline && checked && colorCheckedClasses[color], outline && !checked && outlineClasses[color], !outline && checked && colorCheckedClasses[color], !outline && !checked && colorClasses[color], color === "alternative" && (group && !checked ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-600"), outline && color === "dark" && (group ? checked ? "bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600" : "dark:text-white border-gray-800 dark:border-white" : "dark:text-gray-400 dark:border-gray-700"), coloredFocusClasses[color], hasBorder() && group && "not-first:-ms-px", group ? pill && "first:rounded-s-full last:rounded-e-full" || "first:rounded-s-lg last:rounded-e-lg" : pill && "rounded-full" || "rounded-lg", shadow && "shadow-lg", shadow && coloredShadowClasses[color], disabled && "cursor-not-allowed opacity-50", $$sanitized_props.class);
  if (href && !disabled) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes(
      {
        href,
        ...$$restProps,
        class: clsx(buttonClass),
        role: "button"
      }
    )}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></a>`;
  } else if (tag === "label") {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<label${spread_attributes(
      {
        ...$$restProps,
        class: clsx(buttonClass)
      }
    )}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></label>`;
  } else if (tag === "button") {
    $$payload.out += "<!--[2-->";
    $$payload.out += `<button${spread_attributes(
      {
        type,
        ...$$restProps,
        disabled,
        class: clsx(buttonClass)
      }
    )}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes(
          {
            ...$$restProps,
            class: clsx(buttonClass)
          }
        )}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!---->`;
      }
    );
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    pill,
    outline,
    size,
    href,
    type,
    color,
    shadow,
    tag,
    checked,
    disabled
  });
  pop();
}
function ButtonGroup($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["size", "divClass"]);
  push();
  let size = fallback($$props["size"], "md");
  let divClass = fallback($$props["divClass"], "inline-flex rounded-lg shadow-xs");
  setContext("group", { size });
  $$payload.out += `<div${spread_attributes(
    {
      ...$$restProps,
      class: clsx(twMerge(divClass, $$sanitized_props.class)),
      role: "group"
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { size, divClass });
  pop();
}
function Marquee($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  let speed = fallback($$props["speed"], 1);
  let hoverSpeed = fallback($$props["hoverSpeed"], 1);
  let shadow = fallback($$props["shadow"], false);
  let offset = 0;
  let shadowClass = `after:content-[''] after:absolute after:block after:z-10 after:h-full before:content-[''] before:absolute 
    before:block before:z-10 before:h-full before:end-0 after:shadow-[10px_0_50px_65px_rgba(256,256,256,1)] 
    before:shadow-[-10px_0_50px_65px_rgba(256,256,256,1)] dark:after:shadow-[10px_0_50px_65px_rgba(16,24,39,1)]
    dark:before:shadow-[-10px_0_50px_65px_rgba(16,24,39,1)]`;
  let divCls = twMerge("relative flex overflow-hidden w-full", shadow ? shadowClass : "", $$sanitized_props.class);
  $$payload.out += `<div${attr_class(clsx(divCls))} role="banner"><div class="flex justify-around items-center min-w-full"${attr_style(`transform: ${stringify(`translateX(${offset}px)`)}`)}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div> <div class="flex justify-around items-center min-w-full"${attr_style(`transform: ${stringify(`translateX(${offset}px)`)}`)}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div></div>`;
  bind_props($$props, { speed, hoverSpeed, shadow });
  pop();
}
function Blockquote($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "border",
    "italic",
    "borderClass",
    "bgClass",
    "bg",
    "baseClass",
    "alignment",
    "size"
  ]);
  push();
  let border = fallback($$props["border"], false);
  let italic = fallback($$props["italic"], true);
  let borderClass = fallback($$props["borderClass"], "border-s-4 border-gray-300 dark:border-gray-500");
  let bgClass = fallback($$props["bgClass"], "bg-gray-50 dark:bg-gray-800");
  let bg = fallback($$props["bg"], false);
  let baseClass = fallback($$props["baseClass"], "font-semibold text-gray-900 dark:text-white");
  let alignment = fallback($$props["alignment"], "left");
  let size = fallback($$props["size"], "lg");
  let alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  $$payload.out += `<blockquote${spread_attributes(
    {
      ...$$restProps,
      class: clsx(twMerge(baseClass, alignmentClasses[alignment], sizes[size], bg && bgClass, border && borderClass, italic && "italic", $$sanitized_props.class))
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></blockquote>`;
  bind_props($$props, {
    border,
    italic,
    borderClass,
    bgClass,
    bg,
    baseClass,
    alignment,
    size
  });
  pop();
}
function CheckCircleSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "check circle solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: clsx(twMerge("shrink-0", sizes[size], className)),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    null,
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function ChevronDoubleDownOutline($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "chevron double down outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
      ...restProps,
      class: clsx(twMerge("shrink-0", sizes[size], className)),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    null,
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="m8 7 4 4 4-4m-8 6 4 4 4-4"></path></svg>`;
  pop();
}
function QuoteSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "quote solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: clsx(twMerge("shrink-0", sizes[size], className)),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    null,
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function Main($$payload, $$props) {
  const defaultstyle = " p-medium overflow-scroll scroll-smooth ";
  let { custom } = $$props;
  $$payload.out += `<main${attr_class(defaultstyle + custom)}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></main>`;
}
function Blockquote_1($$payload, $$props) {
  let { description, picture, author, ocupation } = $$props;
  $$payload.out += `<figure class="flex flex-col justify-center items-center gap-minimal text-2 text-medium p-medium">`;
  QuoteSolid($$payload, { class: "text-3 w-maximal" });
  $$payload.out += `<!----> `;
  Blockquote($$payload, {
    alignment: "center",
    size: "maximal",
    class: "text-2 text-minimal",
    children: ($$payload2) => {
      $$payload2.out += `<!---->${escape_html(description)}`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <figcaption class="flex justify-center items-center mt-minimal space-x-3 rtl:space-x-reverse"><img class="w-8 h-8 rounded-full"${attr("src", picture)}> <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-3"><p class="pr-3 font-medium text-minimal">${escape_html(author)}</p> <p class="pl-3 text-sm font-light">${escape_html(ocupation)}</p></div></figcaption></figure>`;
}
function InlineNavigation($$payload, $$props) {
  let {
    d1 = "item",
    d1link,
    d2 = "item",
    d2link,
    d3 = "item",
    d3link
  } = $$props;
  ButtonGroup($$payload, {
    children: ($$payload2) => {
      Button($$payload2, {
        class: "bg-2 text-3 font-bold",
        children: ($$payload3) => {
          $$payload3.out += `<a${attr("href", d1link)}>${escape_html(d1)}</a>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        class: "bg-2 text-3 font-bold",
        children: ($$payload3) => {
          $$payload3.out += `<a${attr("href", d2link)}>${escape_html(d2)}</a>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        class: "bg-2 text-3 font-bold",
        children: ($$payload3) => {
          $$payload3.out += `<a${attr("href", d3link)}>${escape_html(d3)}</a>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Hero($$payload) {
  $$payload.out += `<div class="flex flex-col justify-center items-center"><img src="https://ucarecdn.com/085dd0eb-3cb5-49e2-8689-489fe54c0f12/iconnobg.png" alt="" class="w-[300px]"> `;
  Marquee($$payload, {
    speed: 0.8,
    hoverSpeed: 0.2,
    class: "flex gap-minimal py-minimal text-2 animate-pulse",
    children: ($$payload2) => {
      $$payload2.out += `<p class="text-minimal text-center">The space to learn more about <a href="/#abstract" class="font-light underline decoration-1 text-3 p-minimal"><i>yourself</i></a></p> <p class="text-minimal text-center">The space to learn more about <a href="/#abstract" class="font-light underline decoration-1 text-3 p-minimal"><i>yourself</i></a></p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <ul class="p-medium flex flex-wrap justify-center items-center"><li class="flex justify-center items-center gap-minimal text-center m-medium">`;
  CheckCircleSolid($$payload, { class: "w-medium h-medium" });
  $$payload.out += `<!----> Explore self knowledge</li> <li class="flex justify-center items-center gap-minimal text-center m-medium">`;
  CheckCircleSolid($$payload, { class: "w-medium h-medium" });
  $$payload.out += `<!----> Learn psychological theories</li> <li class="flex justify-center items-center gap-minimal text-center m-medium">`;
  CheckCircleSolid($$payload, { class: "w-medium h-medium" });
  $$payload.out += `<!---->All in totaly free way</li></ul> `;
  ChevronDoubleDownOutline($$payload, { class: "m-minimal w-medium h-medium" });
  $$payload.out += `<!----> `;
  ChevronDoubleDownOutline($$payload, {
    class: "m-minimal w-medium h-medium opacity-[.6]"
  });
  $$payload.out += `<!----> `;
  ChevronDoubleDownOutline($$payload, {
    class: "m-minimal mb-medium w-medium h-medium opacity-[.3]"
  });
  $$payload.out += `<!----></div> <div class="relative flex flex-col justify-center items-center"><div class="absolute top-[200px] min-w-[10rem] min-h-[10rem] bg-3 rounded-full text-center text-medium text-shadow-[1px_1px_0_black]"><b>Who am i?</b></div> <div class="polka-dots svelte-xuqqwk"></div></div> <div>`;
  Blockquote_1($$payload, {
    description: "The Self...embraces ego-consciousness, shadow, anima, and collective unconscious in indeterminable extension. As a totality, the self is a coincidentia oppositorum; it is therefore bright and dark and yet neither",
    author: "Carl Jung",
    ocupation: "Psychanalist",
    picture: "https://ucarecdn.com/7c344b43-d368-40bc-9ab9-9ae1f817c3f6/cgjung429b1f.jpg"
  });
  $$payload.out += `<!----></div> <div id="abstract"><div class="scroll-mt-medium flex flex-col justify-center items-center mt-maximal gap-medium"><h1 class="text-maximal text-center">Get to know your <i class="text-3">SELF</i></h1> <p class="text-center">This website is a non-profit tool for anyone who wants to learn more about psychological theories in general. It's mission is to help people to learn more about themselves in an abstract way. In addition to a greater understanding of theories, there are also different tools that will help on the journey of self-knowledge, a long journey but one that will make you feel more fulfilled and authentic.</p> `;
  InlineNavigation($$payload, {
    d1: "About",
    d2: "Explore",
    d3: "Go to top",
    d3link: "#top"
  });
  $$payload.out += `<!----></div></div>`;
}
function _page($$payload) {
  Main($$payload, {
    children: ($$payload2) => {
      Hero($$payload2);
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
