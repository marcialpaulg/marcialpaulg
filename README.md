### Howdy! Marcial here. <a href="https://marcialpaulg.com/"><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px"></a>

#### I'm a Full-Stack Developer living near Davao city, Philippines.

```php
<?php

namespace Marcialpaulg;

class About extends Me
{
    use CLevelPosition;
    use KeepLearning;

    public const pronouns = [ 'he', 'him' ];

    private $is_hiring = true;

    public function isHiringAtTheCompany(): bool
    {
        return $this->is_hiring;
    }

    public function getContact(): LinkedinProfileLink|GmailEmail
    {
        return $this->getActiveContact();
    }

    public function getKnowledge(): array
    {
        return [
            Php::class,
            Laravel::class,
            Javascript::class,
            TailwindCss::class,
            CloudflareServices::class,
            Solidity::class
        ];
    }

    public function getWork(): ExcitingProject
    {
        return $this->getExcitingProject();
    }
}
```

📨 Feel free to reach me on [LinkedIn](https://www.linkedin.com/in/marcialpaulg/).
