FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    # image {File.open("#{Rails.root}/public/images/test_image.jpg")}
    image {File.open("#{Rails.root}/public/inu.jpg")}
    user
    group
  end
end