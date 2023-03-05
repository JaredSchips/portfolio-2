import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	const router = useRouter();

	const navigation = [
		{
			name: 'About Me',
			href: '/about-me',
			current: router.pathname === '/about-me',
		},
		{
			name: 'Portfolio',
			href: '/portfolio',
			current: router.pathname === '/portfolio',
		},
		{
			name: 'Contact',
			href: '/contact',
			current: router.pathname === '/contact',
		},
		{
			name: 'Resume',
			href: '/resume',
			current: router.pathname === '/resume',
		},
	];

	return (
		<Disclosure as="nav" className="bg-transparant">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center mt-10 sm:items-stretch">
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map(item => (
											<Link
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? 'backdrop-brightness-50 text-white'
														: 'text-gray-900 hover:backdrop-brightness-75',
													'rounded-md px-3 py-3 text-3xl font-medium'
												)}
												aria-current={
													item.current
														? 'page'
														: undefined
												}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pt-2 pb-3">
							{navigation.map(item => (
								<Disclosure.Button
									key={item.name}
									as={Link}
									href={item.href}
									className={classNames(
										item.current
											? 'backdrop-brightness-50 text-white'
											: 'text-gray-900 hover:backdrop-brightness-75',
										'block rounded-md px-3 py-3 text-3xl font-medium'
									)}
									aria-current={
										item.current ? 'page' : undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
