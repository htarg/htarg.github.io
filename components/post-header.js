import Avatar from '../components/avatar'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
    <div className="flex justify-between">
      <div className="flex-initial">
          <PostTitle>{title}</PostTitle>
      </div>
        <div className="flex-initial">
          <div className="hidden md:block md:mb-12">
            <Avatar name={author.name} picture={author.picture} date={date} />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="block md:hidden mb-6">
              <Avatar name={author.name} picture={author.picture} date={date} />
            </div>
          </div>
        </div>
    </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  )
}
