use Rack::Static,
    :urls => ['/img', '/js', '/css'],
    :root => 'public'

map '/' do
    run lambda { |env|
        [
            200,
        {
            'Content-Type'  => 'text/html',
            'Cache-Control' => 'public, max-age=86400'
        },
            File.open('public/index.html', File::RDONLY)
        ]
    }
end

map '/sitemap.xml' do
    run lambda { |env|
        [
            200,
        {
            'Content-Type'  => 'text/xml',
            'Cache-Control' => 'public, max-age=86400'
        },
            File.open('public/sitemap.xml', File::RDONLY)
        ]
    }
end

map '/contact' do
    run lambda { |env|
        [
            200,
        {
            'Content-Type'  => 'text/html',
            'Cache-Control' => 'public, max-age=86400'
        },
            File.open('public/contact.html', File::RDONLY)
        ]
    }
end

map '/developer' do
    run lambda { |env|
        [
            200,
        {
            'Content-Type'  => 'text/html',
            'Cache-Control' => 'public, max-age=86400'
        },
            File.open('public/developer.html', File::RDONLY)
        ]
    }
end

map '/experience' do
    run lambda { |env|
        [
            200,
        {
            'Content-Type'  => 'text/html',
            'Cache-Control' => 'public, max-age=86400'
        },
            File.open('public/experience.html', File::RDONLY)
        ]
    }
end
