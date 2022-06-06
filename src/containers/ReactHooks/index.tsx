import InnerPageWrapper from '@/components/InnerPageWrapper'
import { GiJusticeStar, GiFlowerStar } from 'react-icons/gi'
import { BsStarFill } from 'react-icons/bs'

const links = [
  {
    href: 'https://reactjs.org/docs/hooks-reference.html',
    label: 'Hooks References',
    site: 'reactjs',
    subDocs: [
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#usestate',
        label: 'useState',
        isAdvanced: false,
        details: 'Returns a stateful value, and a function to update it.',
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#useeffect',
        label: 'useeffect',
        isAdvanced: false,
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#usecontext',
        label: 'usecontext',
        isAdvanced: false,
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#usereducer',
        label: 'usereducer',
        isAdvanced: true,
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#usecallback',
        label: 'usecallback',
        isAdvanced: true,
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#usememo',
        label: 'usememo',
        isAdvanced: true,
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#useref',
        label: 'useref',
        isAdvanced: true,
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#useimperativehandle',
        label: 'useimperativehandle',
        isAdvanced: true,
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#uselayouteffect',
        label: 'uselayouteffect',
        isAdvanced: true,
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#usedebugvalue',
        label: 'usedebugvalue',
        isAdvanced: true,
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#usedeferredvalue',
        label: 'usedeferredvalue',
        isAdvanced: true,
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#usetransition',
        label: 'usetransition',
        isAdvanced: true,
      },
      {
        href: 'https://reactjs.org/docs/hooks-reference.html#useid',
        label: 'useid',
        isAdvanced: true,
      },
    ],
  },
]

const ReactHooks = () => {
  return (
    <InnerPageWrapper>
      React Hooks...
      <br />
      <ul>
        {links.map((link) => {
          return (
            <li key={link.label} style={{ marginLeft: 10 }}>
              <a
                target="_blank"
                href={link.href}
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <BsStarFill style={{ marginRight: 8 }} /> {link.label}
              </a>
              <ul>
                {link.subDocs.map((doc) => {
                  return (
                    <li key={doc.label} style={{ marginLeft: 20 }}>
                      <a
                        target="_blank"
                        href={doc.href}
                        rel="noreferrer"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        {doc.isAdvanced ? (
                          <GiJusticeStar style={{ marginRight: 8 }} />
                        ) : (
                          <GiFlowerStar style={{ marginRight: 8 }} />
                        )}
                        {doc.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </InnerPageWrapper>
  )
}
export default ReactHooks
