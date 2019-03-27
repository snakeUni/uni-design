import  React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs} from 'storybook-readme'

import AvatarDemo from '../examples/avatar'
import AvatarReadme from '../examples/avatar/readme.md'

storiesOf('数据显示', module)
.add('Avatar', withDocs(AvatarReadme, () => {
  return <AvatarDemo />
}))