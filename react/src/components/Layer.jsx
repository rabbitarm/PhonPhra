import React, { useEffect } from 'react';

function Layer() {

  useEffect(() => {
    document.querySelectorAll('svg').forEach(svg => svg.setAttribute('viewBox', '0 -960 960 960'));
  }, []);

  return (
    <>
      <section className="container !gap-4">
        <h5>Icon Button - Size</h5>
        <section className="flex flex-wrap gap-4">
          <button className="btn btn-icon btn-xs">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-sm">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-lg">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-xl">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-2xl">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
        </section>
        <h5>Icon Button - Color</h5>
        <section className="flex flex-wrap gap-4">
          <button className="btn btn-icon btn-color-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-color-secondary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-color-tertiary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-color-error">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-color-warning">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-color-success">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-color-info">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-color-grey">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-color-slate">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
        </section>
        <h5>Icon Button - Style</h5>
        <section className="flex flex-wrap gap-4">
          <button className="btn btn-icon">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-mix-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-color-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-outline">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-outline-mix-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-outline-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-ghost">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-ghost-mix-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-ghost-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-reverse">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-reverse-mix-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
          <button className="btn btn-icon btn-reverse-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
          </button>
        </section>
      </section>
      <section className="container !gap-4">
        <h5>Icon + Text Button - Size</h5>
        <section className="flex flex-wrap gap-4">
          <button className="btn btn-xs">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-xs</span>
          </button>
          <button className="btn btn-sm">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-sm</span>
          </button>
          <button className="btn">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>default</span>
          </button>
          <button className="btn btn-lg">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-lg</span>
          </button>
          <button className="btn btn-xl">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-xl</span>
          </button>
          <button className="btn btn-2xl">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-2xl</span>
          </button>
        </section>
        <section className="flex flex-wrap gap-4">
          <button className="btn btn-outline btn-xs">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-xs</span>
          </button>
          <button className="btn btn-outline btn-sm">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-sm</span>
          </button>
          <button className="btn btn-outline">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>default</span>
          </button>
          <button className="btn btn-outline btn-lg">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-lg</span>
          </button>
          <button className="btn btn-outline btn-xl">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-xl</span>
          </button>
          <button className="btn btn-outline btn-2xl">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-2xl</span>
          </button>
        </section>
        <h5>Icon + Text Button - Color</h5>
        <section className="flex flex-wrap gap-4">
          <button className="btn">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>default</span>
          </button>
          <button className="btn btn-color-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-color-primary</span>
          </button>
          <button className="btn btn-color-secondary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-color-secondary</span>
          </button>
          <button className="btn btn-color-tertiary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-color-tertiary</span>
          </button>
          <button className="btn btn-color-error">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-color-error</span>
          </button>
          <button className="btn btn-color-warning">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-color-warning</span>
          </button>
          <button className="btn btn-color-success">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-color-success</span>
          </button>
          <button className="btn btn-color-info">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-color-info</span>
          </button>
          <button className="btn btn-color-grey">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-color-grey</span>
          </button>
          <button className="btn btn-color-slate">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-color-slate</span>
          </button>
        </section>
        <h5>Icon + Text Button - Style</h5>
        <section className="flex flex-wrap gap-4">
          <button className="btn">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>default</span>
          </button>
          <button className="btn btn-mix-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-mix-primary</span>
          </button>
          <button className="btn btn-color-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-color-primary</span>
          </button>
          <button className="btn btn-outline">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-outline</span>
          </button>
          <button className="btn btn-outline-mix-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-outline-mix-primary</span>
          </button>
          <button className="btn btn-outline-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-outline-primary</span>
          </button>
          <button className="btn btn-ghost">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-ghost</span>
          </button>
          <button className="btn btn-ghost-mix-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-ghost-mix-primary</span>
          </button>
          <button className="btn btn-ghost-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-ghost-primary</span>
          </button>
          <button className="btn btn-reverse">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-reverse</span>
          </button>
          <button className="btn btn-reverse-mix-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-reverse-mix-primary</span>
          </button>
          <button className="btn btn-reverse-primary">
            <svg>
              <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
            <span>btn-reverse-primary</span>
          </button>
        </section>
      </section>
    </>
  )

};

export default Layer;