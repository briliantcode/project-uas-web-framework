function PeopleItem(people) {
  return (
    <li class="flex justify-between gap-x-6 py-5">
      <div class="flex gap-x-4">
        <img
          class="h-12 w-12 flex-none rounded-full bg-gray-50"
          src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette-thumbnail.png"
          alt=""
        />
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">
            {people.people.name}
          </p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">
            leslie.alexander@example.com
          </p>
        </div>
      </div>
      <div class="hidden sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
        <p class="mt-1 text-xs leading-5 text-gray-500">
          Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
        </p>
      </div>
    </li>
  );
}

export default PeopleItem;
