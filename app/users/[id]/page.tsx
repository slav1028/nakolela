// app/users/[id]/page.tsx
import ads from '@/ads.json'

export default function UserProfile({ params }: { params: { id: string } }) {
  const userAds = ads.filter((ad) => ad.userId.toString() === params.id)

  if (userAds.length === 0) {
    return <div className="form-wrapper"><h2>Потребителят няма публикувани обяви.</h2></div>
  }

  const sampleUser = {
    id: params.id,
    name: `Потребител ${params.id}`,
    city: userAds[0].city,
    registered: '2024-12-01'
  }

  return (
    <div className="form-wrapper">
      <h1>{sampleUser.name}</h1>
      <p><strong>Град:</strong> {sampleUser.city}</p>
      <p><strong>Регистриран на:</strong> {sampleUser.registered}</p>

      <h2 style={{ marginTop: '20px' }}>Обяви на потребителя:</h2>
      <ul>
        {userAds.map((ad) => (
          <li key={ad.id}>
            <a href={`/ads/${ad.id}`}>{ad.title} – {ad.price} лв</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
