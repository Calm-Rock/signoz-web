'use client'

import React from 'react'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import PageFeedback from '../PageFeedback/PageFeedback'
import DocsPrevNext from '../DocsPrevNext/DocsPrevNext'
import TableOfContents from '../DocsTOC/DocsTOC'
import { QUERY_PARAMS } from '@/constants/queryParams'
import { useSearchParams } from 'next/navigation'
import { ONBOARDING_SOURCE } from '@/constants/globals'

const DocContent: React.FC<{
  title: string
  post: any
  toc: any
  hideTableOfContents: boolean
}> = ({ title, post, toc, hideTableOfContents }) => {
  const searchParams = useSearchParams()
  const lastUpdatedDate = post?.lastmod || post?.date
  const formattedDate =
    lastUpdatedDate
      ? new Date(lastUpdatedDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : null
  const source = searchParams.get(QUERY_PARAMS.SOURCE)

  return (
    <>
      <div className={`doc-content ${source === ONBOARDING_SOURCE ? 'product-onboarding' : ''}`}>
        <h2 className="mt-2 text-3xl">{title}</h2>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc || []} />
        {formattedDate && (
          <p className="mt-8 text-sm text-gray-500">
            Last updated: {formattedDate}
          </p>
        )}
        <PageFeedback />
        <DocsPrevNext />
      </div>

      {!hideTableOfContents && (
        <TableOfContents
          toc={toc}
          hideTableOfContents={hideTableOfContents}
          source={source || ''}
        />
      )}
    </>
  )
}

export default DocContent
