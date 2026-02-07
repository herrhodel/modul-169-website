import React from "react";

export default function CardLink({ title, href, desc }) {
  return (
    <article>
      <a class="card padding--lg cardContainer_fWXF" href={href}>
        <h2 class="text--truncate cardTitle_rnsV" title={title}>
          {title}
        </h2>
        {desc && (
          <p class="text--truncate cardDescription_PWke" title={desc}>
            {desc}
          </p>
        )}
      </a>
    </article>
  );
}
