/* @ds-bundle: {"format":4,"namespace":"TheNoirHausDesignSystem_ba36cd","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"1c6461184fd7","components/buttons/IconButton.jsx":"8a5a2aa58b32","components/display/Badge.jsx":"137aefba536d","components/display/Card.jsx":"aac040e72a0c","components/display/Tag.jsx":"dfb7e9a07b36","components/feedback/Dialog.jsx":"80b12b57b5ce","components/feedback/Toast.jsx":"c87f9d9783ae","components/feedback/Tooltip.jsx":"53c01e855dda","components/forms/Checkbox.jsx":"988d8178f63b","components/forms/Input.jsx":"a11040ac51e4","components/forms/Radio.jsx":"bc53cdab4e1b","components/forms/Select.jsx":"cd0a94e1fc77","components/forms/Switch.jsx":"dea646496247","components/navigation/Tabs.jsx":"5bd176b5b38c","ui_kits/marketing-site/CaseStudy.jsx":"af59f1433cfd","ui_kits/marketing-site/Footer.jsx":"4c34678936dc","ui_kits/marketing-site/Header.jsx":"bde0bd4576a6","ui_kits/marketing-site/Home.jsx":"0c59865c3570","ui_kits/marketing-site/Studio.jsx":"da3d294102e4","ui_kits/marketing-site/Work.jsx":"54c75f8b7ffa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheNoirHausDesignSystem_ba36cd = window.TheNoirHausDesignSystem_ba36cd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
const base = {
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--fw-medium)",
  border: "1px solid transparent",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  transition: "opacity var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)",
  letterSpacing: "var(--ls-normal)"
};
const sizes = {
  sm: {
    padding: "6px 14px",
    fontSize: "var(--fs-small)",
    borderRadius: "var(--radius-sm)"
  },
  md: {
    padding: "10px 20px",
    fontSize: "var(--fs-body)",
    borderRadius: "var(--radius-md)"
  },
  lg: {
    padding: "14px 28px",
    fontSize: "var(--fs-body-lg)",
    borderRadius: "var(--radius-md)"
  }
};
const variants = {
  primary: {
    background: "var(--noir-950)",
    color: "var(--text-on-dark)",
    boxShadow: "var(--shadow-inset-dark)"
  },
  accent: {
    background: "var(--accent)",
    color: "var(--text-on-accent)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-primary)",
    borderColor: "var(--border-strong)"
  },
  surface: {
    background: "var(--bg-surface)",
    color: "var(--text-primary)"
  },
  link: {
    background: "transparent",
    color: "var(--text-primary)",
    padding: 0,
    textDecoration: "underline",
    textUnderlineOffset: 3
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  onClick,
  type = "button"
}) {
  const style = {
    ...base,
    ...(variant !== "link" ? sizes[size] : {}),
    ...variants[variant],
    opacity: disabled ? 0.4 : 1,
    cursor: disabled ? "not-allowed" : "pointer"
  };
  return React.createElement("button", {
    type,
    disabled,
    onClick,
    style,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.opacity = "0.8";
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.opacity = String(style.opacity);
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.opacity = String(style.opacity);
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
const sizeMap = {
  sm: 32,
  md: 40,
  lg: 48
};
const variants = {
  ghost: {
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border-default)"
  },
  solid: {
    background: "var(--noir-950)",
    color: "var(--text-on-dark)",
    border: "none"
  },
  accent: {
    background: "var(--accent-tint)",
    color: "var(--accent)",
    border: "none"
  }
};
function IconButton({
  icon,
  size = "md",
  variant = "ghost",
  "aria-label": ariaLabel,
  onClick,
  disabled = false
}) {
  const d = sizeMap[size];
  const style = {
    width: d,
    height: d,
    borderRadius: "var(--radius-pill)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "opacity var(--duration-fast) var(--ease-standard)",
    ...variants[variant]
  };
  return React.createElement("button", {
    style,
    onClick,
    disabled,
    "aria-label": ariaLabel,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.opacity = "0.8";
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.opacity = String(disabled ? 0.4 : 1);
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const variants = {
  neutral: {
    background: "var(--bg-surface)",
    color: "var(--text-primary)"
  },
  accent: {
    background: "var(--accent-tint)",
    color: "var(--accent-600)"
  },
  dark: {
    background: "var(--noir-950)",
    color: "#fff"
  }
};
function Badge({
  children,
  variant = "neutral"
}) {
  return React.createElement("span", {
    style: {
      ...variants[variant],
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-medium)",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)",
      display: "inline-block",
      letterSpacing: "var(--ls-wide)",
      textTransform: "uppercase"
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  image,
  title,
  meta,
  children,
  hoverable = true
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement("div", {
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      background: "var(--bg-page)",
      border: `1px solid ${hover ? "var(--border-strong)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      fontFamily: "var(--font-sans)",
      transition: "border-color var(--duration-normal) var(--ease-standard)"
    }
  }, image && React.createElement("div", {
    style: {
      aspectRatio: "4/3",
      background: `${image} center/cover`,
      filter: hoverable && !hover ? "grayscale(1)" : "grayscale(0)",
      transition: "filter var(--duration-normal) var(--ease-standard)"
    }
  }), React.createElement("div", {
    style: {
      padding: 20
    }
  }, title && React.createElement("div", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-primary)"
    }
  }, title), meta && React.createElement("div", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, meta), children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick
}) {
  return React.createElement("button", {
    onClick,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-small)",
      padding: "6px 16px",
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${selected ? "var(--noir-950)" : "var(--border-default)"}`,
      background: selected ? "var(--noir-950)" : "transparent",
      color: selected ? "#fff" : "var(--text-primary)",
      cursor: "pointer",
      transition: "all var(--duration-fast) var(--ease-standard)"
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(30,30,30,.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      zIndex: 10
    }
  }, React.createElement("div", {
    style: {
      background: "var(--bg-page)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: 32,
      width: 360,
      maxWidth: "90%"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, React.createElement("div", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-heading)"
    }
  }, title), React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      fontSize: 18
    }
  }, "✕")), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  visible = true
}) {
  return React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 24,
      left: "50%",
      transform: `translateX(-50%) translateY(${visible ? "0" : "12px"})`,
      opacity: visible ? 1 : 0,
      transition: "all var(--duration-normal) var(--ease-standard)",
      background: "var(--noir-950)",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-small)",
      boxShadow: "var(--shadow-md)"
    }
  }, message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--noir-950)",
      color: "#fff",
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-caption)",
      fontFamily: "var(--font-sans)",
      padding: "5px 10px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  const [on, setOn] = React.useState(checked);
  const toggle = () => {
    if (disabled) return;
    const v = !on;
    setOn(v);
    onChange && onChange(v);
  };
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement("span", {
    onClick: toggle,
    style: {
      width: 18,
      height: 18,
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-sm)",
      background: on ? "var(--noir-950)" : "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, on && React.createElement("svg", {
    width: 10,
    height: 8,
    viewBox: "0 0 10 8",
    fill: "none"
  }, React.createElement("path", {
    d: "M1 4l3 3 5-6",
    stroke: "#fff",
    strokeWidth: "1.5"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const wrap = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  fontFamily: "var(--font-sans)"
};
const label = {
  fontSize: "var(--fs-small)",
  color: "var(--text-secondary)"
};
const inputBase = {
  fontFamily: "var(--font-sans)",
  fontSize: "var(--fs-body)",
  color: "var(--text-primary)",
  background: "var(--bg-page)",
  border: "1px solid var(--border-default)",
  borderRadius: "var(--radius-md)",
  padding: "10px 14px",
  outline: "none",
  transition: "border-color var(--duration-fast) var(--ease-standard)"
};
function Input({
  label: labelText,
  placeholder,
  type = "text",
  disabled = false,
  error = false,
  defaultValue,
  onChange
}) {
  const style = {
    ...inputBase,
    borderColor: error ? "var(--accent)" : "var(--border-default)",
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "text"
  };
  return React.createElement("label", {
    style: wrap
  }, labelText && React.createElement("span", {
    style: label
  }, labelText), React.createElement("input", {
    type,
    placeholder,
    disabled,
    defaultValue,
    onChange,
    style,
    onFocus: e => e.currentTarget.style.borderColor = "var(--noir-950)",
    onBlur: e => e.currentTarget.style.borderColor = error ? "var(--accent)" : "var(--border-default)"
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      border: "1px solid var(--border-strong)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked && React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "var(--noir-950)"
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const wrap = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  fontFamily: "var(--font-sans)"
};
const label = {
  fontSize: "var(--fs-small)",
  color: "var(--text-secondary)"
};
const selectBase = {
  fontFamily: "var(--font-sans)",
  fontSize: "var(--fs-body)",
  color: "var(--text-primary)",
  background: "var(--bg-page)",
  border: "1px solid var(--border-default)",
  borderRadius: "var(--radius-md)",
  padding: "10px 14px",
  outline: "none",
  appearance: "none",
  backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%233b3b3b%22 stroke-width=%221.5%22 fill=%22none%22/></svg>')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center"
};
function Select({
  label: labelText,
  options = [],
  disabled = false,
  defaultValue,
  onChange
}) {
  const style = {
    ...selectBase,
    opacity: disabled ? 0.5 : 1
  };
  return React.createElement("label", {
    style: wrap
  }, labelText && React.createElement("span", {
    style: label
  }, labelText), React.createElement("select", {
    disabled,
    defaultValue,
    onChange,
    style
  }, options.map(o => React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label
}) {
  const [on, setOn] = React.useState(checked);
  const toggle = () => {
    if (disabled) return;
    const v = !on;
    setOn(v);
    onChange && onChange(v);
  };
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement("span", {
    onClick: toggle,
    style: {
      width: 36,
      height: 20,
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--noir-950)" : "var(--noir-16)",
      position: "relative",
      transition: "background var(--duration-normal) var(--ease-standard)"
    }
  }, React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: on ? 18 : 2,
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "#fff",
      transition: "left var(--duration-normal) var(--ease-standard)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange
}) {
  const [sel, setSel] = React.useState(active || items[0]);
  const pick = v => {
    setSel(v);
    onChange && onChange(v);
  };
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      borderBottom: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-sans)"
    }
  }, items.map(it => React.createElement("button", {
    key: it,
    onClick: () => pick(it),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "10px 0",
      fontSize: "var(--fs-body)",
      color: sel === it ? "var(--text-primary)" : "var(--text-muted)",
      borderBottom: sel === it ? "2px solid var(--noir-950)" : "2px solid transparent",
      marginBottom: -1,
      transition: "color var(--duration-fast) var(--ease-standard)"
    }
  }, it)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/CaseStudy.jsx
try { (() => {
function CaseStudy({
  goWork
}) {
  const {
    Badge,
    Button
  } = window.TheNoirHausDesignSystem_ba36cd;
  return React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--container-pad)"
    }
  }, React.createElement("span", {
    onClick: goWork,
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--text-muted)",
      cursor: "pointer"
    }
  }, "← Back to Work"), React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 16
    }
  }, React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h1)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-heading)",
      margin: 0
    }
  }, "Ardent"), React.createElement(Badge, {
    variant: "accent"
  }, "Brand Identity")), React.createElement("div", {
    style: {
      aspectRatio: "16/7",
      background: "linear-gradient(135deg,#2a2a2a,#050505)",
      borderRadius: "var(--radius-lg)",
      filter: "grayscale(1)",
      margin: "32px 0"
    }
  }), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 64
    }
  }, React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      lineHeight: "var(--lh-relaxed)",
      color: "var(--text-secondary)"
    }
  }, "Ardent came to us with a strong point of view and no visual language to match it. We built a mark, type system, and packaging suite rooted in restraint — letting the product speak first."), React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      fontSize: "var(--fs-small)"
    }
  }, [["Client", "Ardent"], ["Services", "Identity, Packaging"], ["Year", "2026"]].map(([k, v]) => React.createElement("div", {
    key: k
  }, React.createElement("div", {
    style: {
      color: "var(--text-muted)"
    }
  }, k), React.createElement("div", {
    style: {
      color: "var(--text-primary)",
      marginTop: 2
    }
  }, v))))), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      marginTop: 64
    }
  }, React.createElement("div", {
    style: {
      aspectRatio: "4/5",
      background: "linear-gradient(135deg,#3b3b3b,#111)",
      borderRadius: "var(--radius-lg)",
      filter: "grayscale(1)"
    }
  }), React.createElement("div", {
    style: {
      aspectRatio: "4/5",
      background: "linear-gradient(135deg,#4a4a4a,#151515)",
      borderRadius: "var(--radius-lg)",
      filter: "grayscale(1)"
    }
  })), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 80
    }
  }, React.createElement(Button, {
    variant: "ghost",
    onClick: goWork
  }, "View More Work")));
}
window.CaseStudy = CaseStudy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
function Footer() {
  return React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      marginTop: 96
    }
  }, React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px var(--container-pad)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 32,
      fontFamily: "var(--font-sans)"
    }
  }, React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--text-secondary)",
      maxWidth: 320,
      lineHeight: "var(--lh-normal)"
    }
  }, "An independent creative studio crafting timeless brand identities and editorial-inspired design."), React.createElement("div", {
    style: {
      display: "flex",
      gap: 64
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: "var(--fs-small)",
      color: "var(--text-secondary)"
    }
  }, React.createElement("div", {
    style: {
      color: "var(--text-primary)",
      fontWeight: "var(--fw-semibold)",
      marginBottom: 4
    }
  }, "Studio"), "Work", "About", "Journal"), React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: "var(--fs-small)",
      color: "var(--text-secondary)"
    }
  }, React.createElement("div", {
    style: {
      color: "var(--text-primary)",
      fontWeight: "var(--fw-semibold)",
      marginBottom: 4
    }
  }, "Connect"), "Instagram", "LinkedIn", "hello@thenoirhaus.com"))), React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-pad) 32px",
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-caption)",
      color: "var(--text-muted)"
    }
  }, "© 2026 The Noir Haus. All rights reserved."));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Header.jsx
try { (() => {
function Header({
  route,
  setRoute
}) {
  const {
    IconButton
  } = window.TheNoirHausDesignSystem_ba36cd;
  const links = ["Home", "Work", "Studio", "Contact"];
  return React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(255,255,255,.85)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "18px var(--container-pad)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "The Noir Haus",
    style: {
      height: 34,
      width: "auto",
      cursor: "pointer"
    },
    onClick: () => setRoute("Home")
  }), React.createElement("nav", {
    style: {
      display: "flex",
      gap: 32,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-small)"
    }
  }, links.map(l => React.createElement("span", {
    key: l,
    onClick: () => setRoute(l),
    style: {
      cursor: "pointer",
      color: route === l ? "var(--text-primary)" : "var(--text-secondary)",
      borderBottom: route === l ? "1px solid var(--noir-950)" : "1px solid transparent",
      paddingBottom: 2
    }
  }, l)))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Home.jsx
try { (() => {
const work = [{
  title: "Ardent",
  meta: "Brand Identity — 2026",
  tone: "linear-gradient(135deg,#2a2a2a,#050505)",
  cat: "Branding"
}, {
  title: "Meridian Studio",
  meta: "Web Design — 2025",
  tone: "linear-gradient(135deg,#4a4a4a,#1a1a1a)",
  cat: "Digital"
}, {
  title: "Folio Press",
  meta: "Editorial — 2025",
  tone: "linear-gradient(135deg,#3b3b3b,#0d0d0d)",
  cat: "Editorial"
}];
function Home({
  goWork,
  goCase
}) {
  const {
    Button,
    Badge
  } = window.TheNoirHausDesignSystem_ba36cd;
  return React.createElement("div", null, React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-10) var(--container-pad) var(--space-9)"
    }
  }, React.createElement(Badge, {
    variant: "neutral"
  }, "Est. 2019 — Independent Studio"), React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display)",
      fontWeight: "var(--fw-display-semibold)",
      letterSpacing: "var(--ls-display)",
      lineHeight: "var(--lh-tight)",
      color: "var(--text-primary)",
      margin: "24px 0 0",
      maxWidth: 820
    }
  }, "Timeless brands, built with clarity and restraint."), React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-secondary)",
      lineHeight: "var(--lh-relaxed)",
      maxWidth: 560,
      margin: "24px 0 0"
    }
  }, "We believe exceptional design comes from intention, not trends. Every project is thoughtfully crafted to create enduring brands and meaningful experiences."), React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 36
    }
  }, React.createElement(Button, {
    variant: "primary",
    onClick: goWork
  }, "View Our Work"), React.createElement(Button, {
    variant: "ghost"
  }, "Start a Project"))), React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-pad) var(--space-9)"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 32
    }
  }, React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-heading)",
      margin: 0
    }
  }, "Selected Work"), React.createElement("span", {
    onClick: goWork,
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--accent)",
      cursor: "pointer",
      textDecoration: "underline"
    }
  }, "View all")), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, work.map(w => React.createElement("div", {
    key: w.title,
    onClick: goCase,
    style: {
      cursor: "pointer"
    }
  }, React.createElement("div", {
    style: {
      aspectRatio: "4/3",
      background: w.tone,
      borderRadius: "var(--radius-lg)",
      filter: "grayscale(1)"
    }
  }), React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-primary)"
    }
  }, w.title), React.createElement("div", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, w.meta))))), React.createElement("section", {
    style: {
      background: "var(--noir-950)",
      padding: "var(--space-9) 0"
    }
  }, React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-pad)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 32
    }
  }, [["120+", "Brands Launched"], ["7", "Years in Practice"], ["18", "Design Awards"]].map(([n, l]) => React.createElement("div", {
    key: l
  }, React.createElement("div", {
    style: {
      fontSize: "var(--fs-h1)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-heading)",
      color: "#fff"
    }
  }, n), React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      color: "rgba(255,255,255,.6)",
      marginTop: 6
    }
  }, l))))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Studio.jsx
try { (() => {
function Studio() {
  const {
    Button,
    Input,
    Select
  } = window.TheNoirHausDesignSystem_ba36cd;
  return React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--container-pad)"
    }
  }, React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h1)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-heading)",
      margin: 0
    }
  }, "The Studio"), React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-secondary)",
      lineHeight: "var(--lh-relaxed)",
      maxWidth: 640,
      marginTop: 24
    }
  }, "The Noir Haus is an independent creative studio crafting timeless brand identities, digital experiences, and editorial-inspired design. We believe exceptional design comes from clarity, restraint, and intention — not trends."), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24,
      marginTop: 56
    }
  }, ["Identity", "Digital", "Editorial"].map(s => React.createElement("div", {
    key: s,
    style: {
      padding: 24,
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)"
    }
  }, React.createElement("div", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-semibold)"
    }
  }, s), React.createElement("div", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--text-secondary)",
      marginTop: 8,
      lineHeight: "var(--lh-normal)"
    }
  }, "Considered, enduring work — built to outlast trend cycles.")))), React.createElement("div", {
    style: {
      marginTop: 80,
      paddingTop: 64,
      borderTop: "1px solid var(--border-subtle)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64
    }
  }, React.createElement("div", null, React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-heading)",
      margin: 0
    }
  }, "Enquiries"), React.createElement("p", {
    style: {
      fontSize: "var(--fs-body)",
      color: "var(--text-secondary)",
      marginTop: 16,
      lineHeight: "var(--lh-normal)"
    }
  }, "Tell us about your brand and timeline — we respond within two business days.")), React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, React.createElement(Input, {
    label: "Name"
  }), React.createElement(Input, {
    label: "Email",
    type: "email"
  }), React.createElement(Select, {
    label: "Project type",
    options: ["Brand Identity", "Web Design", "Editorial"]
  }), React.createElement(Button, {
    variant: "primary"
  }, "Send Enquiry"))));
}
window.Studio = Studio;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Studio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Work.jsx
try { (() => {
const items = [{
  title: "Ardent",
  meta: "Brand Identity — 2026",
  cat: "Branding",
  tone: "linear-gradient(135deg,#2a2a2a,#050505)"
}, {
  title: "Meridian Studio",
  meta: "Web Design — 2025",
  cat: "Digital",
  tone: "linear-gradient(135deg,#4a4a4a,#1a1a1a)"
}, {
  title: "Folio Press",
  meta: "Editorial — 2025",
  cat: "Editorial",
  tone: "linear-gradient(135deg,#3b3b3b,#0d0d0d)"
}, {
  title: "Aster & Co",
  meta: "Brand Identity — 2024",
  cat: "Branding",
  tone: "linear-gradient(135deg,#5a5a5a,#151515)"
}, {
  title: "Lumen House",
  meta: "Web Design — 2024",
  cat: "Digital",
  tone: "linear-gradient(135deg,#333,#0a0a0a)"
}, {
  title: "Quiet Paper Co.",
  meta: "Editorial — 2023",
  cat: "Editorial",
  tone: "linear-gradient(135deg,#444,#111)"
}];
function Work({
  goCase
}) {
  const {
    Tag
  } = window.TheNoirHausDesignSystem_ba36cd;
  const [filter, setFilter] = React.useState("All");
  const cats = ["All", "Branding", "Digital", "Editorial"];
  const shown = filter === "All" ? items : items.filter(i => i.cat === filter);
  return React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--container-pad)"
    }
  }, React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h1)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-heading)",
      margin: 0
    }
  }, "Selected Work"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      margin: "28px 0 36px"
    }
  }, cats.map(c => React.createElement(Tag, {
    key: c,
    selected: filter === c,
    onClick: () => setFilter(c)
  }, c))), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24
    }
  }, shown.map(w => React.createElement("div", {
    key: w.title,
    onClick: goCase,
    style: {
      cursor: "pointer"
    }
  }, React.createElement("div", {
    style: {
      aspectRatio: "4/3",
      background: w.tone,
      borderRadius: "var(--radius-lg)",
      filter: "grayscale(1)"
    }
  }), React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-semibold)"
    }
  }, w.title), React.createElement("div", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, w.meta)))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
